// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (!data.license) {
  return ''
} else {
  licenseBadge = `https://shields.io/badges/license-${data.license}-blue`
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!data.license) {
    return ''
  } else {
    licenseLink = `https://choosealicense.com/licenses/${data.license}/#`
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!data.license) {
    return ''
  } else {
    
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
  console.log("Data In Markdown Function: ", data);
  return `# ${data.title}

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
${data.license}
`;

}

module.exports = generateMarkdown;
