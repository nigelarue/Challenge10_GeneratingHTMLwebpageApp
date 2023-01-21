const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');

const render = require('./src/template.js');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const teamMates = [];
const idArray = [];

function creationStation() {
 function createManager() {
  console.log('Please enter team member information when prompted');
  inquirer
  .createPromptModule([
   {
    type: 'input',
    name: 'managerName',
    message: "Please provide the team manager's name:",
    validate: (answer) => {
     if (answer !== '') {
      return true;
     }
     return 'Please provide a valid name.';
    },
   },
   {
    type: 'input',
    name: 'managerId',
    message: "Please provide the team manager's ID number:",
    validate: (answer) => {
     const pass = answer.match(/^[1-9]\d*$/);
     if (pass) {
      return true
     }
     return 'Please enter a numeric value greater than 0.';
    },
   },
   {
    type: 'input',
    name: 'managerEmail',
    message: "Please provide the team manager's email:",
    validate: (answer) => {
     const pass = answer.match(/\S+@\S+\.\S+/);
    },
   },
   {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "Please provide the team manager's office number:",
    validate: (answer) => {
     const pass = answer.match(/^[1-9]\d*$/);
     if (pass) {
      return true;
     }
     return 'Please enter a number greater than zero.';
    },
   },
  ])
  .then((answers) => {
   const manager = new Manager(
    answers.managerName,
    answers.managerId,
    answers.managerEmail,
    answers.managerOfficeNumber
   );
   teamMates.push(manager);
   idArray.push(answers.managerId);
   createTeam();
  });
 }

 function createTeam() {
  inquirer
   .createPromptModule([
    {
     type: 'list',
     name: 'teamRoleOptions',
     message: 'Please provide the role of the team member:',
     choices: [
      'Engineer',
      'Intern',
      "Not applicable",
     ],
    },
   ])
   .then((userChoice) => {
    switch (userChoice.TeamRoleOptions) {
     case 'Engineer':
      addEngineer();
      break;
     case 'Intern':
      addIntern();
      break;
      default:
       buildTeam();
    }
   });
 }

 function addEngineer() {
  inquirer
   .prompt([
    {
     type: 'input',
     name: 'engineerName',
     message: "Please provide the engineer's name:"
     validate: (answer) => {
      if (answer !== '') {
       return true;
      }
      return 'Please enter a minimum of one character to continue...';
     },
    },
    {
     type: 'input',
     name: 'engineerId',
     message: "Please provide engineer ID number (must have at least one numerical value):",
     validate: (answer) => {
      const pass = answer.match(/^[1-9]\d*$/);
      if (pass) {
       if (idArray.includes(answer)) {
        return 'The provided ID is already taken. Please provide a different ID number.';
       } else {
        return true;
       }
      }
      return 'An acceptable engineer ID number must have at least one numberical value greater than zero.';
     },
    },
    {
     type: 'input',
     name: 'engineerEmail',
     message: "Please provide engineer email address:",
     validate: (answer) => {
      const pass = answer.match(/\S+@\S+\.\S+/);
      if (pass) {
       return true;
      }
      return 'Please provide a valid email address.';
     },
    },
    {
     type: 'input',
     name: 'engineerGithub',
     message: "Please provide engineer's GitHub username:",
     validate: (answer) => {
      if (answer !== '') {
       return true;
      }
      return 'Please enter a minimum of one character to continue...';
     },
    },
   ])
   .then((answers) => {
    const engineer = new Engineer(
     answers.engineerName,
     answers.engineerId,
     answers.engineerEmail,
     answers.engineerGithub
    );
    teamMates.push(engineer);
    idArray.push(answers.engineerId);
    createTeam();
   });
 }
 
 function addIntern() {
  inquirer
  .prompt([
   {
    type: 'input',
    name: 'internName',
    message: "Please provide intern's name:",
    validate: (answer) => {
     if (answer !== '') {
      return true;
     }
     return 'Please enter a minimum of one character to continue...';
    },
   },
   {
    type: 'input',
    name: 'internId',
    message: "Please provide intern ID number:",
    validate: (answer) => {
     const pass = answer.match(/^[1-9]\d*$/);
     if (pass) {
      if (idArray.includes(answer)) {
       return 'The provided ID number is already assigned to another team member. Please provide a different ID number greater than zero.';
      } else {
       return true;
      }
     }
     return 'Please provide a number greater than zero to continue...';
    },
   },
   {
    type: 'input',
    name: 'internEmail',
    message: "Please provide intern email address:",
    validate: (answer) => {
     const pass = answer.match(/\S+@\S+\.\S+/);
     if (pass) {
      return true;
     }
     return 'Please provide a valid email address.';
    },
   },
   {
    type: 'input',
    name: 'internSchool',
    message: "Please provide school/program intern is associated with:",
    validate: (answer) => {
     if (answer !== '') {
      return true;
     }
     return 'Please provide a school/program with as least one character.';
    },
   },
  ])
  .then((answers) => {
   const intern = new Intern(
    answers.internName,
    answers.internId,
    answers.internEmail,
    answers.internSchool
   );
   teamMates.push(intern);
   idArray.push(answers.internId);
   createTeam();
  });
 }

 function buildTeam() {
  if (!fs.existsSync(DIST_DIR)) {
   fs.mkdirSync(DIST_DIR);
  }
  fs.writeFileSync(distPath, render(teamMates), 'utf-8');
 }

 createManager();
}

creationStation();