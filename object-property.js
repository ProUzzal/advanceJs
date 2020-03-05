const students = [
  { name: `Uzzal`, id: 3215 },
  { name: `Minhaz`, id: 1254 },
  { name: `Alam`, id: 2245 }
];
// const output = [];
// for (let i = 0; i < students.length; i++) {
//   const element = students[i];
//   const result = students.map(name);
//   output.push(result);
// }
// console.log(output);
//Map name.
// const names = students.map(k => k.name);
// console.log(names);

//Filter
const bigger = students.filter(x => x.id < 40);
console.log(bigger);
//find
const find = students.find(x => x.id > 40);
console.log(find);
