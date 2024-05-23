const sum = (num1, num2) => {
  return num1 + num2;
}

const calc = (num1, num2, calcFunction) => {
  return calcFunction(num1, num2);
}

console.log(calc(2, 2, sum));

setTimeout(() => {
  console.log('Hello JavaScript');
}, 5000)

const greeting = (name) => {
  console.log(`Hello ${name}`);
}

setTimeout(greeting, 2000, "Hielo")