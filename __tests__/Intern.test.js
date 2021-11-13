const Intern = require('../lib/intern')
const Employee = require('../lib/employee')

describe('Intern Class', () => {
    describe('Initialization', () => {
        it('Should extend the Employee class', () => {
            const intern = new Intern();

            expect(intern instanceof Employee).toBe(true);
        })
    });
    describe('functionality', () => {
        it('should return "Intern" when getRole is called', () => {
            const intern = new Intern();

            const result = intern.getRole();

            expect(result).toEqual('Intern')
        });
        it('should return name correctly when using getName()', () => {
            const name = 'testName';
            const id = 'testID';
            const email = 'testEmail';

            const expected = new Employee(name, id, email).getName();

            expect(name).toEqual(expected)
        });
        it('should return id correctly when using getID()', () => {
            const name = 'testName';
            const id = 'testID';
            const email = 'testEmail';

            const expected = new Employee(name, id, email).getID();

            expect(id).toEqual(expected)
        });
        it('should return email correctly when using getEmail()', () => {
            const name = 'testName';
            const id = 'testID';
            const email = 'testEmail';

            const expected = new Employee(name, id, email).getEmail();

            expect(email).toEqual(expected)
        });
    })
});
