const inquirer = require("inquirer");

const questions = {
    manager: [
        {
            name: 'teamName',
            type: 'input',
            message: 'What would you like to name your team?',
            validate: val => val.length > 0 ? true : console.log('Please Enter a Team name')
        },
        {
            name: 'name',
            type: 'input',
            message: "What is the Manager's name?",
            validate: val => (val.length > 0)
            
        },
        {
            name: 'employeeID',
            type: 'input',
            message: "Please enter Employee ID number?",
            validate: val => (val.length > 0 && !isNaN(val)) ? true : console.log('Please enter valid ID number')
        },
        {
            name: 'email',
            type: 'input',
            message: 'Email Address?',
            validate: val => /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi.test(val) ? true: console.log('Please Enter valid Email')
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Please enter Office Number?',
            validate: val => (val.length > 0)
        },
        {
            name: 'addAnother',
            type: 'list',
            message: "Would you like to add another member?",
            choices: ['Intern', 'Engineer', "No, I'm done creating my team"]
        }
    ],
    intern: [
        {
            name: 'name',
            type: 'input',
            message: "What is the interns's name?",
            validate: val => (val.length > 0)
            
        },
        {
            name: 'employeeID',
            type: 'input',
            message: "Intern's Employee ID number?",
            validate: val => (val.length > 0 && !isNaN(val)) ? true : console.log('Please enter valid ID number')
        },
        {
            name: 'email',
            type: 'input',
            message: "Intern's Email Address?",
            validate: val => /[a-zA-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi.test(val) ? true: console.log('Please Enter valid Email')
        },
        {
            name: 'school',
            type: 'input',
            message: 'What school did Intern attend??',
            validate: val => (val.length > 0)
        },
        {
            name: 'addAnother',
            type: 'list',
            message: "Would you like to add another member?",
            choices: ['Intern', 'Engineer', "No, I'm done creating my team"]
        }
    ],
    engineer: [
        {
            name: 'name',
            type: 'input',
            message: "What is engineers's name?",
            validate: val => (val.length > 0)
        },
        {
            name: 'employeeID',
            type: 'input',
            message: "Employee ID number?",
            validate: val => (val.length > 0 && !isNaN(val)) ? true : console.log('Please enter valid ID number')
        },
        {
            name: 'email',
            type: 'input',
            message: "Engineer's email address?",
            validate: val => /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi.test(val) ? true: console.log('Please Enter valid Email')
        },
        {
            name: 'gitHub',
            type: 'input',
            message: 'GitHub username?',
            validate: val => (val.length > 0)
        },
        {
            name: 'addAnother',
            type: 'list',
            message: "Would you like to add another member?",
            choices: ['Intern', 'Engineer', "No, I'm done creating my team"]
        }
    ]
}

module.exports = questions;