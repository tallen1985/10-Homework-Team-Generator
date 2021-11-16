//import modules
const Employee = require('./employee');

//Engineer adds onto Employee with github username
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, id, email);
        this.gitHub = gitHub;
    }

    getGitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer