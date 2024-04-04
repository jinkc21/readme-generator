// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// defining some dataset
const questions = [
{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
    validate: titleInput => {
        if (titleInput) {
            return true;
        } else {
            console.log('Title is required');
            return false;
        }
    }
},
{   type: 'input',
    message: 'What was your motivation for the project?',
    name: 'what',
},
{
    type: 'input',
    message: 'Why did you build this project?',
    name: 'why',
},
{
    type: 'input',
    message: 'How is this project useful?',
    name: 'how',
},
{
    type: 'input',
    message: 'What are the steps required to install your project?',
    name: 'installation',
},
{
    type: 'input',
    message: 'Provide instructions and examples of your project being used.',
    name: 'usage',
},
{
    type: 'input',
    message: 'List your collaborators and provide links any parties that helped with your project.',
    name: 'credits',
},
{
    type: 'list',
    message: 'Select an option for your license.',
    name: 'license',
    choices: ['Apache-2.0', 'MIT', 'bsl-1.0', 'unlicense'],
},
{
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
},
{
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
},
{
    type: 'input',
    message: 'How did you test your project?',
    name: 'tests',
},
{
    type: 'input',
    message: 'What are your contributing guidelines?',
    name: 'contributing'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // we want to take the USER data and WRITE it to a NEW FILE

    // What is the name of our file?
    // Where is the data comming from
    // HOW to we FORMAT a WRITE PROCEEDURE
    fs.writeFile(fileName, data, function(error) {
        if(error) {
            console.log("Error: ", error);
        }
        console.log("New File Created");
    });
}

// TODO: Create a function to initialize app
function init() {
    // console.log("I am code BEFORE the QUESTIONS Set")
    // here we kick our questions to the user  --> ASYNC OPERATION
    inquirer.prompt(questions)
        .then(function(data) {
           // console.log("I am code INSIDE the RETRUED RESPONSE")
            console.log(data);
            
            let result = generateMarkdown(data);
            // console.log('Results: ', result);
            let renderLicense = 
            writeToFile('Generated-README.md', result);
            // writeToFile()
        })
        .catch(error => {
            console.log(error)
        })
        
      //  generateMarkdown(data);
  //  console.log("I am code AFTER the QUESTIONS Set")
  //  console.log("Data is no longer available at this point")
}

// Function call to initialize app
init();
