// dependencies
const Mustache = require('mustache');
const fse = require('fs-extra')
const { DateTime } = require("luxon");
const branches = require('list-git-branches');
const cp = require('child_process');

// constants
const MUSTACHE_README = './README.mustache';
const PROPOSED_PATH = './Proposed';
const APPROVED_PATH = './Approved';
const REMOVED_FAILED_PATH = './Removed_Or_Failed';
const IGNORED_DIRS = ['PIP_TEMPLATE', 'GOVERNANCE_PROPOSAL_TEMPLATE'];

const template_data = {
	Proposed: {
		Volatility_DAO_Governance: [],
		Oracle_System_Parameters: [],
		Adding_A_Methodology: [],
		Managing_A_Methodology: [],
		Managing_An_Index: [],
	},
	Approved: {
		Governance_PIPs: [],
		Volatility_Oracle_PIPs: []
	},
	Removed_Or_Failed: {
		Volatility_Oracle_Indices: [],
		Volatility_Oracle_Methodologies: []
	}

};

// detect all status.json files
const get_json_files = function (path, files) {
	fse.readdirSync(path).forEach((file) => {
		let subpath = path + '/' + file;

		if (!IGNORED_DIRS.includes(file) && fse.lstatSync(subpath).isDirectory()) {
			files = get_json_files(subpath, files);
		} else {
			if (file === 'status.json') {
				files.push(path + '/' + file);
			}
		}
	});

	return files;
}

// let's get all branches (ignoring "main")
const all_branches = [...new Set(branches.sync('.'))];

console.log(all_branches);

// now we need to loop through and switch to each branch to get status.json files
all_branches.forEach((branch) => {

	const status_json_files = [];

	// switching branch
	cp.execSync('git checkout ' + branch);

	if(branch == 'main') {
		get_json_files(APPROVED_PATH, status_json_files);
		get_json_files(REMOVED_FAILED_PATH, status_json_files);
	} else {
		get_json_files(PROPOSED_PATH, status_json_files);
	}

	// now we parse the paths for template data
	status_json_files.forEach((file) => {
		let validation = file.match(/^.\/([a-z\_]+)\/([a-z\_]+)\/([a-z0-9\-\_]+)\/([a-z0-9\-\_\.]+)\/*([a-z0-9\-\_\.]+)*/i)

		if (template_data.hasOwnProperty(validation[1]) && template_data[validation[1]].hasOwnProperty(validation[2])) {
			status_json = fse.readJsonSync(file);

			// let's add the path for template
			status_json.path = 'https://github.com/Volatility-DAO/PIPS/' + file.replace('status.json', '').replace('./', 'tree/' + branch + '/');

			// let's format the approval date
			status_json.approval_date = DateTime.fromISO(status_json.approval_date).toLocaleString(DateTime.DATE_MED);

			// if this is proposed then we track Step
			if (validation[1] === 'Proposed') {
				status_json.step = validation[3].replace('Step_', '');
			}

			//add json into the template queue for rendering
			template_data[validation[1]][validation[2]].push(status_json);
		}
	});

});

// let's make sure to switch back to "main" branch
cp.execSync('git checkout main');

// now generate the readme
fse.readFile(MUSTACHE_README, (err, data) => {
	if (err) throw err;
	const output = Mustache.render(data.toString(), template_data);
	fse.writeFileSync('README.md', output);
});