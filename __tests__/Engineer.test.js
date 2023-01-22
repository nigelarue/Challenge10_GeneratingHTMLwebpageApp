const Engineer = require("../lib/Engineer");

test("getPosition() should return \"Engineer\"", () => {
 const testValue = "Engineer";
 const e = new Engineer("Soundwave", 1, "test@test.com", testValue);
}); 

test("Can get GitHub username from getGithubuser()", () => {
 const testValue = "superior_repos";
 const e = new Engineer("Soundave", 1, "test@test.com", testValue);
 expect(e.getGithubuser()).toBe(testValue);
});