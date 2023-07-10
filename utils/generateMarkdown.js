// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const {userInfo} = require("os");
function renderLicenseBadge(license) {
  return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `[License](https://opensource.org/licenses/${license})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `This project is under the ${license} ${renderLicenseLink(license)} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions
  The link to my application is ${data.link}. If you have any questions, please feel free to contact me through github or directly by email.
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
