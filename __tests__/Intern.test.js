const { expect, test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates a Intern object', () => {
    const intern = new Intern('Bob', 1, 'bob@mail.com', 'school');

    expect(intern.name).toBe('Bob');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toContain('bob');
    expect(intern.school).toContain('school');
});

test('checks the Intern object', () => {
    const intern = new Intern('Bob', 1, 'bob@mail.com', 'school');

    expect(intern.getName()).toBe('Bob');
    expect(intern.getId()).toEqual(1);
    expect(intern.getEmail()).toBe('bob@mail.com');
    expect(intern.getSchool()).toBe('school');
    expect(intern.getRole()).toBe('Intern');
});
console.log(new Intern('Bob', 1, 'bob@mail.com', 'school'));