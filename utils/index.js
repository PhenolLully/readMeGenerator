// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// Node v10+ includes a promises module as an alternative to using callbacks with file system methods.
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'task',
      message: 'What was your task?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'what were the steps required to start your project',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'How and who helped you complete this assignment?',
    },
    {
      type: 'input',
      name: 'userStory',
      message: 'write your user story.',
    },
    {
        type: 'input',
        name: 'acceptanceCriteria',
        message: 'write your acceptance criteria.',
      }
  ]);
};

const generateReadMe = ({ task, motivation, installation, usage, credits, userStory, acceptanceCriteria }) =>
`# Read Me Generator

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



