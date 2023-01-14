//coding challange 2

// Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];

// let tips = [];
// let total = 0;

// for (let i = 0; i < bills.length; i++) {
//   tips = calcTip(bills[i]);
//   console.log(tips);
//   total = bills[i] + tips;
//   console.log(total);
// }

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks masss 78 kg and is 1.69 m tall. John masss 92 kg and is 1.95 m
// tall.

// const bmi = function (mass, height) {
//   return mass / height ** 2;
// };

const Mark = {
  name: " Mark",
  surname: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const John = {
  name: "John",
  susrname: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

Mark.calcBMI();
John.calcBMI();

if (Mark.bmi > John.bmi) {
  console.log(` Marks Bmi ${Mark.bmi} is higher than  John's ${John.bmi} `);
} else if (John.bmi > Mark.bmi) {
  console.log(` Johns Bmi ${John.bmi} is higher than Mark's ${Mark.bmi} `);
}
