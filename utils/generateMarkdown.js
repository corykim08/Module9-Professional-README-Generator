// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'APACHE 2.O'){
    return "https://img.shields.io/badge/License-Apache_2.0-blue.svg"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'APACHE 2.O'){
    return "https://www.apache.org/licenses/LICENSE-2.0"
  }
  else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'APACHE 2.O'){
    return `![license](${licenseBadge}) This application is covered under ${license} license link: ${licenseLink}`
  }
  else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  license = data.license;
  licenseBadge = renderLicenseBadge(license)
  licenseLink = renderLicenseLink(license)
  licenseSection = renderLicenseSection(license)


  return `# ${data.title};

  ${licenseSection}
  
  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Contribution](#Contribution)
  * [Test](#Test)
  * [Questions](#Questions)
  
  ## Description
    ${data.description}
  ## Installation
    ${data.installation}
  ## Usage
    ${data.usage}
  ## Contribution
    ${data.contribution}
  ## Test
    ${data.test}
  ## Questions
    Github user name: ${data.username}
    link: https://github.com/${data.username}

    You can reach me if you have any additional questions via this email address:
      ${data.email} 

  `
  
};

module.exports = generateMarkdown;
