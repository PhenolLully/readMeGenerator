// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the README?',
    }, 
    {
      type: 'input',
      name: 'description',
      message: 'Description of project',
    },
    {
      type: 'list',
      name: 'tableOfContents',
      choices: 
      [
        'Title',
      'Description',
      'Installation',
      'Usage',
      'License',
      'Contributing',
      'Test',
      'Questions',
      'Email'
    ],
      message: 'Table of Contents for Users to see',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what were the steps to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Examples of use of project',
    },
    {
      type: 'list',
      name: 'license',
      choices:[ "MIT License", "", "", ""],
      message: 'Any licenses?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who helped with this project?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Any test for the application?',
      },
      {
        type: 'input',
        name: 'questions',
        message: 'Github Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Email',
      }
  ]);
};

const generateReadMe = ({ title, description, tableOfContents, installation, usage, license, contributing, test, questions, email}) =>
`# Title

${title}

## Description

Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
${description}

## Table of Contents

If your README is long, add a table of contents to make it easy for users to find what they need.

${tableOfContents}

## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
${installation}

## Usage

${usage}

## License

${license}

## Contributing
Who helped contribute to your project?
${contributing}

## Tests

${test}

## Questions

Github Profile link here: ${questions}

How to reach me? ${email}

`;



// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('README.md', generateReadMe(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();



