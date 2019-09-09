// import the function from getDeepProperty.js file
const getDeepProperty = require("./getDeepProperty");
// create an object
const someObj = {
  person: {
    name: {
      first: "FirstName",
      middleInitial: "I",
      lastName: "LastName"
    }
  }
};
// pass the object and path to getDeepProperty function
const value = getDeepProperty(someObj, "person.name.lastName");

console.log(value);
