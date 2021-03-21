// const TeamGenerator = require('./lib/TeamGenerator');

// new TeamGenerator().initalizeGenerator();

// // const Game = require('./lib/Game');

// // new Game().initializeGame();

const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');

let employeeProfiles = [];

const newManager = () => {
    console.log(`
==============================================
Welcome to the Team Profile Generator!
Please follow the prompts to create your team.
==============================================
`);
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the team manager name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the team manager employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager email?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager office number?'
        }
    ])
    .then(answer => {
        const manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
        employeeProfiles.push(manager);
        // this.add(manager);
        console.log(employeeProfiles);
        // employee.push(manager);
        // console.log(employee);
    });
};

newManager();
