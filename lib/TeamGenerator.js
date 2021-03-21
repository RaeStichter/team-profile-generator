// const inquirer = require('inquirer');
// const Employee = require('./Employee');
// const Manager = require('./Manager');
// //const employee = [];

// function TeamGenerator() {
//     this.employee = [];
// }

// TeamGenerator.prototype.initalizeGenerator = function() {
//     newManager();
// }

// const newManager = () => {
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is the team manager name?'
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'What is the team manager employee id?'
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is the team manager email?'
//         },
//         {
//             type: 'input',
//             name: 'officeNumber',
//             message: 'What is the team manager office number?'
//         }
//     ])
//     .then(answer => {
//         let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
//         // this.add(manager);
//         console.log(manager);
//         // employee.push(manager);
//         // console.log(employee);
//     });
// };

// // promptUser();
// module.exports = TeamGenerator;