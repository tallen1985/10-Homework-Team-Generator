//import modules
const Employee = require('./employee');

//Intern adds onto Employee with School information
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern