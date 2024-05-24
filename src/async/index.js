const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve("Async!"), 2000)
      : reject(new Error("Error!"));
  });
}

const anotherFunction = async () => {
  const response = await fnAsync();
  console.log(response);
  console.log("Done");
}

console.log("Start");
anotherFunction();
console.log("End");