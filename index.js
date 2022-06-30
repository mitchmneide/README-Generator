// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your current project's title?",
        validate: titleinput => {
            if(titleinput) {
                return true;
            } else {
                console.log("Enter the title of your project")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: " Describe your project be as descriptive as possible! (Required)",
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a desrcription of your project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: "How to install the application?(required)",
        validate: installationInput => {
            if(installationInput){
                return true;
            } else {
                console.log('Please provide us on how to install');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: "how to do you use this application? ",
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please provide us with how to use this application');
                return false;
            }
        }
    },
    {
        type: 'rawlist',
        name: 'license',
        message: ['Apache 2.0', 'BSD', 'MIT', 'Academic', 'Mozilla', 'None'],
        validate: licenseInput => {
            if(licenseInput) {
                return true;
            } else {
                console.log('Choice from list provided');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Include a test of project  ',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Include a test")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributor',
        message: 'Any contributors to this project?',
        validate: contributeInput => {
            if(contributeInput) {
                return true;
            } else {
                console.log("Include contributors(even if it's yourself ;P)");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?( Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter your name! or else ;P")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter email! ")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?(Required)',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log("Please enter your github username! or else ;P")
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
