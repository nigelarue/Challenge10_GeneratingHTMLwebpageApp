const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("getPosition() should return \"Manager\"", () => {
 const testValue = "Manager";
 const e = new Manager("Soundwave", 1, "test@test.com", 117);
 expect(e.getPosition()).toBe(testValue);
});

test("getOfficeNumber() should yield the office number", () => {
 const testValue = 117;
 const e = new Manager("Soundwave", 1, "test@test.com", 117);
 expect(e.getOfficeNumber()).toBe(testValue);
});