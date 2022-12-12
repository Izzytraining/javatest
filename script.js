//task1

function hello() {}
console.log("Hello, World");

//task2

function quadrupler(num) {
  return num * 4;
}
console.log(quadrupler(-20));

//task3

function welcome(firstname = "bob", lastname = "bobby") {
  return "hello " + firstname + " " + lastname + " how can I help you?";
}
console.log(welcome());

//task4

function tempconvertor(fahrenheit) {
  let result = ((fahrenheit - 32) * 5) / 9;
  return result;
}

console.log(Math.round(tempconvertor(80)));

//task5

//create age and name varibles
//function dog years, age and name param - 1 year of dog - age = - 15 - 2 year = 9 human years
//if age 1 = 15
//else if age 2 = 9
//else if age  2> = 5
//else
//console log - name & age

function myDogage() {
  let age = 24;
  let name = "bob";
  let dogAge = age * 7;
  //return "My name is ${name}. I am ${Dogage} years old in dog years.";
  return "hello " + name + " your dog age is " + dogAge;
}
console.log(myDogage());

//task6 calcultor

function calculator(argument1, argument2, argument3) {}

//task 7 less than

function min(a, b) {
  return;
}

//task 8 to the power of
function pow() {
  let y = Math.pow((x = 4), (n = 4));
  return y;
}

console.log(pow());
