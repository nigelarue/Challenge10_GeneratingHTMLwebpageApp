const Employee = require("../lib/Employee");

test("Employee instance test", () => {
 const e =new Employee();
 expect(typeof(e)).toBe("object");
});

test("Constructor argument name test", () => {
 const name = "Starscream";
 const e = new Employee(name);
 expect(e.name).toBe(name);
});

test("Constructor argument ID test", () => {
 const testValue = 100;
 const e = new Employee("Soundwave", testValue);
 expect(e.id).toBe(testValue);
});

test("getEmail() test", () => {
 const testValue = "test@test.com";
 const e = new Employee("Soundwave", 1, testValue);
 expect(e.getEmail()).toBe(testValue);
});

test("getPosition() test", () => {
 const testValue = "Employee";
 const e = new Employee("Starscream", 1, "test@test.com");
 expect(e.getPosition()).toBe(testValue);
});