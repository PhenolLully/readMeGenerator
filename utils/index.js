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
      type: 'input',
      name: 'tableOfContents',
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
        name: 'questions',
        message: 'Enter Email',
      }
  ]);
};

const generateReadMe = ({ task, motivation, installation, usage, credits, userStory, acceptanceCriteria }) =>
`# Title

## Your Task

${task}

- What was your motivation?

${motivation}

## Installation

${installation}

## Usage

${usage}

## Credits

${credits}

## User Story

${userStory}

## Acceptance Criteria

${acceptanceCriteria}

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



