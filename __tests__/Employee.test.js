const { expect, test } = require('@jest/globals');
const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@mail.com');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toContain('bob');
});

test('checks the Employee object', () => {
    const employee = new Employee('Bob', 1, 'bob@mail.com');

    expect(employee.getName()).toBe('Bob');
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toBe('bob@mail.com');
    expect(employee.getRole()).toBe('Employee');
});
console.log(new Employee('Bob', 1, 'bob@mail.com'));