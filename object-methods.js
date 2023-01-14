// Object Methods
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYeah: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   // calcAge: function (birthYeah) {
//   return 2037 - birthYeah;
// }
// calcAge: function () {
//   // console.log(this);
//   return 2037 - this.birthYeah;
// }
//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${
//       jonas.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
//   },
// };
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

// Looping Arrays, Breaking and Continuing

const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
// types = [];
// for (let i = 0; i < jonas.length; i++) {
//   // console.log(typeof jonas[i]);
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const year = [1991, 2017, 1985, 1888];
// const age = [];

// for (let i = 0; i < year.length; i++) {
//   age.push(2037 - year[i]);
// }
// console.log(age);

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}
