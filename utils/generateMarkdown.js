// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (!license) {
  return ''
} else {
  return `https://img.shields.io/badge/license-${license}-blue`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else {
    return `https://choosealicense.com/licenses/${license}/`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else {
    return `License: ${license}`
  }
}

/*
function noInputs() {
  let someData = [1, 2, 3, 4, 5];

  renderLicenseBadge("MIT");
  renderLicenseLink()
  return 5;
}
*/

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log("Data In Markdown Function: ", data);
  return `${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.what}
${data.why}
${data.how}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## License
${renderLicenseSection(data.license)}

${renderLicenseLink(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions regarding this project, contact links are listed below.

GitHub: https://github.com/${data.username}

email: ${data.email}
`;

}

module.exports = generateMarkdown;
