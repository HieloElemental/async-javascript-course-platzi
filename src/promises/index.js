const promise = new Promise((resolve, reject) => {
  resolve('hey!');

});

const cows = 15; //* CHANGABLE VALUE: if you excecute this value, you can see the different outputs.

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows that is enough.`)
  } else {
    reject(`We need more cows.`);
  }
});

countCows.then((res) => {
  console.log(res);
}).catch((err) => {
  console.error(err);
}).finally(() => {
  console.log('Finally');
});