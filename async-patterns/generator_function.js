function* generatorFunction() {
  console.log("Generator function is running");

  let x = 5;
  yield x;

  x++;
  y = yield x;
  return x + y;
}

let iterator = generatorFunction();

console.log(iterator.next()); // print -> {value: 5, done:false}
console.log(iterator.next()); // print -> {value: 6, done:true}
console.log(iterator.next(4));
console.log("All done");
