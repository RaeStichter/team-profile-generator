const inquirer = require('inquirer');
const fs = require('fs');

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
                console.log(employeeProfiles, employeeProfiles.length);
                //return employeeProfiles;
                generateEmployeeCard(employeeProfiles);
            } else {
                newEmployee();
            }
        })
    });
};

// get information based on role of employee
const employeeRole = (employee) => {
    switch (employee.getRole()) {
        case "Manager":
            return `Office Number: ${employee.getOfficeNumber()}`;
        case "Engineer":
            return `Github Username: <a href ="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a>`;
        case "Intern":
            return `School: ${employee.getSchool()}`;
    }
};
const employeeIcon = (employee) => {
    switch (employee.getRole()) {
        case "Manager":
            return `<i class="ri-cup-line"></i> <p>Manager</p>`;
        case "Engineer":
            return `<span class="oi oi-wrench"></span> <p>Engineer</p>`;
        case "Intern":
            return `<span class="oi oi-book"></span> <p>Intern</p>`;
    }
};

const generateEmployeeCard = employeeProfiles => {
    // empty array to store generated employee cards
    const employeeCardArray = [];
    employeeProfiles.forEach((employee) => {
        const employeeCard = `
        <div class="card" style="width: 18rem;">
            <div class="card-body bg-primary text-white">
                <h5 class="card-title">${employee.getName()}</h5>
                <p class="card-text">${employeeIcon(employee)}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.getId()}</li>
                <li class="list-group-item">Email: <a href ="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                <li class="list-group-item">${employeeRole(employee)}</li>
            </ul>
        </div>
        `;
        // push to card array
        employeeCardArray.push(employeeCard);
    })
    console.log(employeeCardArray);
    generateHTML(employeeCardArray);
};

const generateHTML = employeeCardArray => {
    fs.copyFile('./src/page-template.html', './dist/index.html', (err) => {
        if (err) throw err;
        fs.appendFile('./dist/index.html', employeeCardArray.join(""), (err) => {
            if (err) throw err;
        });
    });
};

newEmployee();