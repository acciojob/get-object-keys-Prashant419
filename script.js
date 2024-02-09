//your JS code here. If required.
// Creating the student object
const student = {
  name: 'John'
};

// Adding getKeys method to Object prototype
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Example usage
const keys = student.getKeys();
console.log(keys); // Output: ['name']