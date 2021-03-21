const { expect, test } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

test('creates a Engineer object', () => {
    const engineer = new Engineer('Bob', 1, 'bob@mail.com', 'bobGitHub');

    expect(engineer.name).toBe('Bob');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toContain('bob');
    expect(engineer.github).toContain('bob');
});

test('checks the Engineer object', () => {
    const engineer = new Engineer('Bob', 1, 'bob@mail.com', 'bobGitHub');

    expect(engineer.getName()).toBe('Bob');
    expect(engineer.getId()).toEqual(1);
    expect(engineer.getEmail()).toBe('bob@mail.com');
    expect(engineer.getGithub()).toBe('bobGitHub');
    expect(engineer.getRole()).toBe('Engineer');
});
console.log(new Engineer('Bob', 1, 'bob@mail.com', 'bobGitHub'));