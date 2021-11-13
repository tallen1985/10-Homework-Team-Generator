const questions = {
    manager: [
        {
            name: 'name',
            type: 'input',
            message: "Manager's name?"
        },
        {
            name: 'employeeID',
            type: 'number',
            message: "Employee ID number?"
        },
        {
            name: 'email',
            type: 'input',
            message: 'Email Address?'
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Office Number?'
        },
        {
            name: 'addAnother',
            type: 'list',
            choices: ['Intern', 'Engineer', 'None']
        }
    ],
    intern: [
        {
            name: 'name',
            type: 'input',
            message: "Intern's name?"
        },
        {
            name: 'employeeID',
            type: 'number',
            message: "Employee ID number?"
        },
        {
            name: 'email',
            type: 'input',
            message: 'Email Address?'
        },
        {
            name: 'school',
            type: 'input',
            message: 'School?'
        },
        {
            name: 'addAnother',
            type: 'list',
            choices: ['Intern', 'Engineer', 'None']
        }
    ],
    engineer: [
        {
            name: 'name',
            type: 'input',
            message: "Engineers's name?"
        },
        {
            name: 'employeeID',
            type: 'number',
            message: "Employee ID number?"
        },
        {
            name: 'email',
            type: 'input',
            message: 'Email Address?'
        },
        {
            name: 'gitHub',
            type: 'input',
            message: 'GitHub username?'
        },
        {
            name: 'addAnother',
            type: 'list',
            choices: ['Intern', 'Engineer', 'None']
        }
    ]
}

module.exports = questions;