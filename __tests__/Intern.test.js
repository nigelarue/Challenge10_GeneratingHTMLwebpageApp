const Intern = require("../lib/Intern");

test("getPosition() should return \"Intern\"", () => {
 const testValue = "Intern";
 const e = new Intern("Soundwave", 1, "test@test.com", "Iacon University");
 expect(e.getPosition()).toBe(testValue);
});

test("getSchool() should return inputted school", () => {
 const testValue = "Iacon University";
 const e = new Intern("Soundwave", 1, "test@test.com", testValue);
 expect(e.getSchool()).toBe(testValue);
});