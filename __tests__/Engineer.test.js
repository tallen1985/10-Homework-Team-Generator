const Engineer = require('../lib/engineer')
const Employee = require('../lib/employee')

describe('Engineer Class', () => {
    describe('Initialization', () => {
        it('Should extend the Employee class', () => {
            const engineer = new Engineer();

            expect(engineer instanceof Employee).toBe(true);
        })
    });
    describe('functionality', () => {
        it('should return "Engineer" when getRole is called', () => {
            const engineer = new Engineer();

            const result = engineer.getRole();

            expect(result).toEqual('Engineer')
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
