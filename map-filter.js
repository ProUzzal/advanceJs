//First way to square a number..

const numbers = [3, 5, 30, 15, 50];
// let output = [];
// for (let i = 0; i < numbers.length; i++) {
//   let element = numbers[i];
//   let result = element * element;
//   output.push(result);
// }

// const result = numbers.map(function(element) {
//   return element * element;
// });

//easy way to square JavaScript Array map.
// const result = numbers.map(x => x * x);
const bigger = numbers.filter(x => x < 5);
console.log(bigger);
