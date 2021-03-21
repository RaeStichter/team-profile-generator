// const TeamGenerator = require('./lib/TeamGenerator');

// new TeamGenerator().initalizeGenerator();

// // const Game = require('./lib/Game');

// // new Game().initializeGame();

const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let employeeProfiles = [];

const newEmployee = () => {
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
            message: "What is your team member's name",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your team member's name.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "What is your team member's id number?",
            validate: (id) => {
                if (id) {
                    return true;
                } else {
                    console.log("Please enter your team member's id number.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team member's email?",
            validate: (email) => {
                if (email) {
                    return true;
                } else {
                    console.log("Please enter your team member's email.");
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "What is your team member's role?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the team Manager's office number?",
            when: (answer) => answer.role === "Manager"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the Engineer's github username?",
            when: (answer) => answer.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the Intern go to?",
            when: (answer) => answer.role === "Intern"
        }
    ])
    .then(answer => {
        if (answer.role === "Manager") {
            const manager = new Manager(
                answer.name,
                answer.id,
                answer.email,
                answer.officeNumber
            );
            employeeProfiles.push(manager);
        } else if (answer.role === "Engineer") {
            const engineer = new Engineer(
                answer.name,
                answer.id,
                answer.email,
                answer.github
            );
            employeeProfiles.push(engineer);
        } else if (answer.role === "Intern") {
            const intern = new Intern(
                answer.name,
                answer.id,
                answer.email,
                answer.school
            );
            employeeProfiles.push(intern);
        }

        // ask if there are additional employees to add
        inquirer.prompt(
            {
                type: 'confirm',
                name: 'addNewEmployee',
                message: 'Would you like to add another employee?',
                default: false
            }
        )
        .then(({ addNewEmployee }) => {
            if (!addNewEmployee) {
                console.log("Thank you for entering your employee!");
                console.log(employeeProfiles);
            } else {
                newEmployee();
            }
        })
    });
};

newEmployee();
