// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
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
        message: "How to install the application?(Required)",
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
        message: "how to do you use this application?(Required) ",
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
        message: 'Choose a license for your project(Required)',
        choices: ['Apache 2.0', 'BSD 3', 'MIT', 'Academic', 'Mozilla', 'None']
    },
    {
        type: 'input',
        name: 'test',
        message: 'Include a test of project(Required)',
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
        message: 'How can someone help contribute to your project?',
        validate: contributorInput => {
            if(contributorInput) {
                return true;
            } else {
                console.log("Please provide ways on how someone could contribute to this project")
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Anything that helped you complete this project such as friends/colleagues or video/tutorials/websites that helped you reach your end point include them here! And their github if possible. ',
        validate: creditsInput => {
            if(creditsInput) {
                return true;
            } else {
                console.log("Please provide ");
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
        message: "What is your email?(Required)",
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
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then(data => {
        writeToFile('README.md', generateMarkdown(data));
        console.log('Succesfully created README')
    })
} 
// Function call to initialize app
init();
