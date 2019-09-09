const { expect } = require("chai");
const getDeepProperty = require("../getDeepProperty");

describe("getDeepProperty function", () => {
  const someObj = {
    person: {
      name: {
        first: "FirstName",
        middleInitial: "I",
        lastName: "LastName"
      }
    }
  };

  it("should return 'undefined' if invalid object is given", () => {
    const result1 = getDeepProperty(undefined, "person.name.lastName");
    const result2 = getDeepProperty(null, "person.name.lastName");
    const result3 = getDeepProperty(2, "person.name.lastName");
    expect(result1).to.equal(undefined);
    expect(result2).to.equal(undefined);
    expect(result3).to.equal(undefined);
  });

  it("should return 'undefined' if invalid path is given", () => {
    const result = getDeepProperty(someObj, null);
    expect(result).to.equal(undefined);
  });

  it("should return 'undefined' if path does not exist", () => {
    const result = getDeepProperty(someObj, "person.name.address");
    expect(result).to.equal(undefined);
  });

  it("should return property value if path exists", () => {
    const result = getDeepProperty(someObj, "person.name.lastName");
    expect(result).to.equal("LastName");
  });
});
