// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `[Github license](https://img.shields.io/badge/${license}-blue.svg)`
  }
  return "";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    if (license === 'Apache 2.0') {
      return '[License: Apache](https://opensource.org/licenses/Apache-2.0)'
    } else if (license === 'BSD 3') {
      return '[License: BSD 3 Clause](https://opensource.org/licenses/BSD-3-Clause)'
    } else if (license === 'MIT') {
      return '[License: MIT](https://opensource.org/licenses/MIT)'
    } else if (license === 'Academic') {
    return '[Licnese: Academic](https://opensource.org/licenses/AFL-3.0)'
    } else if (license === 'Mozilla') {
      return '[License: Mozilla(MPL-2.0)](https://opensource.org/licenses/MPL-2.0)'
    }
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `Project is licensed under ${license} license`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  * [License](#license)
  
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contributing 
  ${data.contributor}
  ## Credits 
  ${data.credits}
  ## Tests
  ${data.test}
  ## Questions
  If there is any questions on my project can contact me through ${data.email}. And can view other projects on my https://github.com/${data.github}.
  ## License 
  &copy; ${new Date().getFullYear()} by ${data.name}
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  `;
}

module.exports = generateMarkdown;
