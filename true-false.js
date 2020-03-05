//Falsy:
// "" Empty string, 0, NaN, Undefined, false, null. We can easily say that thing will be false which has no value .

// Truthy:
// Anything that have value . Example: " " sting with white space and any others value like "0", [ ]

let name = null;
if (name) {
  console.log("This condition will be true");
} else {
  console.log("This condition will be falsed.");
}
function add(num1, num2) {
  console.log(num1 + num2);
}
const result = add(10, 15);
console.log(result);
