function getDeepProperty(obj, path) {
  // return if path is invalud
  if ("string" !== typeof path) {
    return;
  }
  // break the dot-separated path into an array
  const keys = path.split(".");

  // initialize the result with given object
  let result = obj || {};

  // loop over the path keys
  for (let i = 0; i < keys.length; i++) {
    // assign result the value of object at current key path
    result = result[keys[i]];

    // if current value is not an object, we can not traverse the path
    if (result === undefined || result === null) {
      break;
    }
  }

  // result contains the final value at the given path
  return result;
}

module.exports = getDeepProperty;
