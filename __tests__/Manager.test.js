const Manager = require('../lib/manager')
const Employee = require('../lib/employee')

describe('Manager Class', () => {
    describe('Initialization', () => {
        it('Should extend the Employee class', () => {
            const manager = new Manager();

            expect(manager instanceof Employee).toBe(true);
        })
    });
    describe('functionality', () => {
        it('should return "Manager" when getRole is called', () => {
            const manager = new Manager();

            const result = manager.getRole();

            expect(result).toEqual('Manager')
        });
        it('should return name correctly when using getName()', () => {
            const teamName = 'testTeamName'
            const name = 'testName';
            const id = 'testID';
            const email = 'testEmail';

            const expected = new Manager(teamName, name, id, email).getName();

            expect(name).toEqual(expected)
        });
        it('should return id correctly when using getID()', () => {
            const teamName = 'testTeamName'
            const name = 'testName';
            const id = 'testID';
            const email = 'testEmail';

            const expected = new Manager(teamName, name, id, email).getID();

            expect(id).toEqual(expected)
        });
        it('should return email correctly when using getEmail()', () => {
            const teamName = 'testTeamName'
            const name = 'testName';
            const id = 'testID';
            const email = 'testEmail';

            const expected = new Manager(teamName, name, id, email).getEmail();

            expect(email).toEqual(expected)
        });
    })
});
