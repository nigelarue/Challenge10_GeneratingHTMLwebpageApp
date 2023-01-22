const Manager = require("./employee");

class Manager extends Employee {
 constructor(name, id, email, officeNumber) {
  super(name, id, email);
  this.officeNumber = officeNumber;
 }

 getPosition() {
  return "Manager";
 }

 getOfficeNumber() {
  return this.officeNumber;
 }
}

module.exports = Manager;