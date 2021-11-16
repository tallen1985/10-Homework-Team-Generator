const Employee = require('./employee');

class Manager extends Employee {
    constructor(teamName, name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber= officeNumber;
        this.teamName = teamName;
    }
}

module.exports = Manager