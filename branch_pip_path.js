// dependencies
const fse = require('fs-extra')

// constants
const PROPOSED_PATH = './Proposed';
const IGNORED_DIRS = ['PIP_TEMPLATE', 'GOVERNANCE_PROPOSAL_TEMPLATE'];

const proposed_paths = [
	'Adding_A_Methodology',
	'Managing_A_Methodology',
	'Managing_An_Index',
	'Oracle_System_Parameters',
	'Volatility_DAO_Governance'
];

const path_regex = new RegExp('^.\/Proposed\/(' + proposed_paths.join('|') + ')\/(Step_[1-3])\/([a-z0-9\-\_]+)\/README.md', 'i');

async function main() {
	// detect all status.json files
	const get_readme_files = function (path, files) {
		fse.readdirSync(path).forEach((file) => {
			let subpath = path + '/' + file;

			if (!IGNORED_DIRS.includes(file) && fse.lstatSync(subpath).isDirectory()) {
				files = get_readme_files(subpath, files);
			} else {

				let readme_test = subpath.match(path_regex);
				if (readme_test) {
					files.push(readme_test);
				}
			}
		});

		return files;
	}

	// now, let's scan the 3 primary paths
	const found_readme = get_readme_files(PROPOSED_PATH, []);

	// let's output for use
	console.log('%s', (found_readme.length > 0) ? found_readme[0][1] + '/' + found_readme[0][2] + '/' + found_readme[0][3] : '');
}

main();