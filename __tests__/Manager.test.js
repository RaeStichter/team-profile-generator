const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('creates a Manager object', () => {
    const manager = new Manager('Bob', 1, 'bob@mail.com', 7);

    expect(manager.name).toBe('Bob');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toContain('bob');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('checks the Manager object', () => {
    const manager = new Manager('Bob', 1, 'bob@mail.com', 7);

    expect(manager.getName()).toBe('Bob');
    expect(manager.getId()).toEqual(1);
    expect(manager.getEmail()).toBe('bob@mail.com');
    expect(manager.getOfficeNumber()).toEqual(7);
    expect(manager.getRole()).toBe('Manager');
});
console.log(new Manager('Bob', 1, 'bob@mail.com', 7));