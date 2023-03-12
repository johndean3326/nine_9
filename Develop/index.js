// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a discription of your project'
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Please list any table of contents'
    }
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will you use?',
        choices: ['MIT', 'ISC', 'GNUGPLv3', 'No License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter in the contributors, if any'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions, if any'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please enter your email address'
    },
    {
        type: 'input',
        name: 'question2',
        message: 'Please enter your GitHub user name'
    }
];];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
