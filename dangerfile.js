const { danger, fail } = require('danger');
const fse = require('fs-extra')

const valid_folder_paths = [
	'^(Proposed\/(Adding_An_Index)\/Step_([1-3])\/([a-z0-9\-\_]+))\/([a-z0-9\-\_\/\.]*)',
	'^(Proposed\/(Adding_An_Index)\/Step_([1-3])\/([a-z0-9\-\_]+))\/implementation\/([a-z0-9\-\_\/\.]*)',
	'^(Proposed\/(Changing_Parameters)\/([a-z0-9\-\_]+))\/([a-z0-9\-\_\/\.]*)',
	'^(Proposed\/(Removing_An_Index)\/([a-z0-9\-\_]+))\/([a-z0-9\-\_\/\.]*)',
	'^(Proposed\/(Volatility_DAO_Governance)\/Step_([1])\/([a-z0-9\-\_]+))\/([a-z0-9\-\_\/\.]*)',
];

// first, let's make sure no file is deleted outside of their respective folders
danger.git.deleted_files.forEach((file) => {
	let validations = valid_folder_paths.map((path_regex) => file.match(new RegExp(path_regex, 'i'))).filter((i) => i);

	if (validations.length === 0) {
		fail("File: `" + file + "` cannot be deleted.");
	}
});
const step_validations = [];

// first, let's make sure no file is created outside of their respective folders
danger.git.created_files.forEach((file) => {
	let validations = valid_folder_paths.map((path_regex) => file.match(new RegExp(path_regex, 'i'))).filter((i) => i);

	if (validations.length === 0) {
		fail("File: `" + file + "` cannot be created outside of a valid directory.");
	} else {
		// caching validations for futher validations
		step_validations.push(validations[0]);
	}
});

// first, let's make sure no file is modified outside of their respective folders
danger.git.modified_files.forEach((file) => {
	let validations = valid_folder_paths.map((path_regex) => file.match(new RegExp(path_regex, 'i'))).filter((i) => i);

	if (validations.length === 0) {
		fail("File: `" + file + "` cannot be modified.");
	} else {
		// caching validations for futher validations
		step_validations.push(validations[0]);
	}
});

// let's set the current step and methodology name
const current_step = step_validations[0][3];
const proposal_type = step_validations[0][2];
const methodology_name = step_validations[0][4];
const proposal_working_dir = './' + step_validations[0][1];

// console.log(step_validations);

// let's make sure all new files are in the same proposal type
if (!step_validations.every((v, i, a) => v[2].toLowerCase() === a[0][2].toLowerCase())) {
	fail("You should only be working on a single proposal type (PIP/Governance) at a time, you've added files for multiple proposal types on this Pull Request.");
	return;
}

// let's make sure all new files are in the same Step
if (!step_validations.every((v, i, a) => v[3].toLowerCase() === a[0][3].toLowerCase())) {
	fail("You should only be working on a single step at a time, you've added files for multiple steps on this Pull Request.");
	return;
}

// let's make sure all new files are in the same proposal
if (!step_validations.every((v, i, a) => v[4].toLowerCase() === a[0][4].toLowerCase())) {
	fail("You should only be working on a single proposal folder at a time, you've added files in multiple proposals folders on this Pull Request.");
	return;
}

// let's make sure the following files are present at all times
const required_files = [
	'status.json',
];

const get_proposal_files = function (path, proposal_content) {
	fse.readdirSync(path).forEach((file) => {
		let subpath = path + '/' + file;

		if (fse.lstatSync(subpath).isDirectory()) {
			proposal_content.paths.push(file);
		} else {
			proposal_content.files.push(file);
		}
	});

	return proposal_content;
}

let proposal_content = get_proposal_files(proposal_working_dir, { paths: [], files: [] });

// now we determine which proposal type they're submitting and validate accordingly
if (proposal_type === 'Adding_An_Index') {
	const required_adding_an_index_files = [...[
		'LICENSE',
		'README.md',
		'Implementation_Parameters.md',
		methodology_name + '.pdf',
	], ...required_files];

	const required_adding_an_index_paths = [
		'implementation',
	];

	required_adding_an_index_files.forEach((rf) => {
		if (!proposal_content.files.some(v => v.toLowerCase() === rf.toLowerCase())) {
			fail('File required: `' + rf + '`, please add.');
		}
	});

	required_adding_an_index_paths.forEach((rf) => {
		if (!proposal_content.paths.some(v => v.toLowerCase() === rf.toLowerCase())) {
			fail('Directory required: `' + rf + '`, please add.');
		}
	});

	// either of these files must be present, but not both
	const methodology_pip_file = [
		'METHODOLOGY_NAME_PIP.md',
		methodology_name + '_PIP.md'
	];
	const has_methodology_pip_file = [];
	methodology_pip_file.forEach((mpf) => {
		has_methodology_pip_file.push(proposal_content.files.some(v => v.toLowerCase() === mpf.toLowerCase()));
	});
	// neither file is there
	if (!has_methodology_pip_file.includes(true)) {
		fail("The methodology PIP file is missing, you should have either `" + methodology_pip_file.join("` or `") + "` in your methodology directory.");
		return;
	}
	// both files are there
	if (has_methodology_pip_file.every(v => v === true)) {
		fail("Only one methodology file should be present both `" + methodology_pip_file.join("` and `") + "` is in your methodology directory.");
		return;
	}

	// now we validate depending on the current step we're on
	if (current_step === '1') {
		// let make sure only the required files are present at this step
		if (has_methodology_pip_file[1]) {
			fail("It appears you're at Step 1, this file should NOT be present: `" + v + "`.");
		}
	} else if (current_step === '2') {
		// step 2 validations here
	} else if (current_step === '3') {
		// at this step the correct methodology PIP file should exist
		if (has_methodology_pip_file[0]) {
			fail("It appears you're at Step 3, the `" + methodology_pip_file[0] + '` should be renamed to `' + methodology_pip_file[1] + '`.');
		}
	}
} else if (proposal_type === 'Volatility_DAO_Governance') {
	const required_adding_an_index_files = [...[
		'README.md',
	], required_files];

	required_adding_an_index_files.forEach((rf) => {
		if (!proposal_content.files.some(v => v.toLowerCase() === rf.toLowerCase())) {
			fail('File required: `' + rf + '`, please add.');
		}
	});
}