const Employee = require("./employee");

class Engineer extends Employee {
 constructor(name, id, email, github) {
  super(name, id, email);
  this.github = github;
 }

 getPosition() {
  return "Engineer";
 }

 getGithubuser() {
  return this.github;
 }

}

module.exports = Engineer;