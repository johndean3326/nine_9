// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
   if (license === 'No License') {
  return ""
} else {
  const badges = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  GNUGPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
}
return badges[license]
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { if (license === 'No License') {
  return ""
} else {
  const links = {
  MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
  ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
  GNUGPLv3: '[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
  }
  return links[license]
}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { if (license === 'No License') {
  return ""
} else {
  return `## License 
  ${license}`
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description 
  ${data.description}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [How to contribute](#Contribution)
  - [Test](#Test)
  - [Questions](#Questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
   
  ${renderLicenseSection(data.license)} 
  Copyright (c) John Dean.  All rights reserved. Licensed under the ${renderLicenseLink(data.license)} license.
  ## Contribution
   ${data.contributing}
  ## Test
  ${data.test}
  ## Questions

  Questions or issues please direct them to:  ${data.questions} or on [GitHub](https://github.com/${data.question2}).
  
  

`;
}

module.exports = generateMarkdown;
