function* gen() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const g = gen();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Hielo', 'Electro', 'Metal', 'Piedra', 'Fuego']);
console.log(it.next().value); // "Hielo"
console.log(it.next().value); // "Electro"
console.log(it.next().value); // "Metal"
console.log(it.next().value); // "Piedra"
console.log(it.next().value); // "Fuego"
console.log(it.next().value); // undefined

