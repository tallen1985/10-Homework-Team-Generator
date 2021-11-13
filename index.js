const inquirer = require('inquirer')
const fs = require('fs')
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const questions = require('./src/questions')

let team = [];
let addTeamMember = '';

inquirer.prompt(questions.manager)

    .then(managerAnswers => {
        const {name, employeeID, email, addAnother} = managerAnswers
        const manager = new Manager(name, employeeID, email)
        team.push(manager)
        addTeamMember = addAnother;
    }).then(() => {
        if (addTeamMember === 'Intern') {
                inquirer.prompt(questions.intern).then(internAnswers => {
                const {name, employeeID, email, school, addAnother} = internAnswers
                const intern = new Intern(name, employeeID, email, school)
                team.push(intern);
                addTeamMember = addAnother;
            }).then(() => {
                console.log(team)
            })
        } else if (addTeamMember === 'Engineer') {
            inquirer.prompt(questions.engineer).then(engineerAnswers => {
                const {name, employeeID, email, gitHub, addAnother} = engineerAnswers
                const engineer = new Intern(name, employeeID, email, gitHub)
                team.push(engineer);
                addTeamMember = addAnother;
            }).then(() => {
                console.log(team)
            })
        }
    })