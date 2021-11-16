//import modules
const Employee = require('./employee');

// create class from Employee and add officeNumber and teamName
class Manager extends Employee {
    constructor(teamName, name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber= officeNumber;
        this.teamName = teamName;
    }
}

module.exports = Manager