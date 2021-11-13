const Employee = require('../lib/employee')

describe('Employee Test', () => {
    describe("Initialization", () => {
        it('should return an object containing name, id, and email property when initiated', () => {
            const obj = new Employee();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
    });
    describe('Getters', () => {
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
        it('should return "Employee" when using getRole()', () => {
            const name = 'testName';
            const id = 'testID';
            const email = 'testEmail';

            const expected = new Employee(name, id, email).getRole();

            expect(expected).toEqual('Employee')
        });
    });
});