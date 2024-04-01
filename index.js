// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},
{   type: 'input',
    message: 'What was your motivation for the project?',
    name: 'what',
}
{
    type: 'input',
    message: 'Why did you build this project?',
    name: 'why',
}
{
    type: 'input',
    message: 'How is this project useful?',
    name: 'how',
}
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
}
{
    type: 'input',
    message: 'Provide instructions and examples of your project being used.',
    name: 'usage',
}
{
    type: 'input',
    message: 'List your collaborators and provide links any parties that helped with your project.',
    name: 'credits',
}
{
    type: 'input',
    message: 'Select an option for your license.',
    name: 'license',
    choices: 
}
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {



}

// TODO: Create a function to initialize app
function init() {


}

// Function call to initialize app
init();
