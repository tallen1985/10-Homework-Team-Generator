//import modules
const inquirer = require('inquirer')
const Intern = require('./lib/intern');
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const questions = require('./src/questions');
const {writeToFile} = require('./src/writeToFile')

//declare globals
let team = [];
let addTeamMember = '';

// allows creation of new members (in a loop for user decided # of members)
let newMember = () => {
    if (addTeamMember === 'Intern') {
        inquirer.prompt(questions.intern).then(internAnswers => {
        const {name, employeeID, email, school, addAnother} = internAnswers
        const intern = new Intern(name, employeeID, email, school)
        team.push(intern);
        addTeamMember = addAnother;
    }).then(() => {
        newMember()
    })
    } else if (addTeamMember === 'Engineer') {
        inquirer.prompt(questions.engineer).then(engineerAnswers => {
            const {name, employeeID, email, gitHub, addAnother} = engineerAnswers
            const engineer = new Engineer(name, employeeID, email, gitHub)
            team.push(engineer);
            addTeamMember = addAnother;
        }).then(() => {
            newMember()
        })
    } else {
        writeToFile(team);
    }

}

//initiate questions
inquirer.prompt(questions.manager)

    .then(managerAnswers => {
        const {teamName, name, employeeID, email, officeNumber, addAnother} = managerAnswers
        const manager = new Manager(teamName, name, employeeID, email, officeNumber)
        team.push(manager)
        addTeamMember = addAnother;
    }).then(() => {
        newMember()
    })