const sayHello = (name) => console.log(`Hello ${name}`);

sayHello('Or Hasson');

const sayHello2 = () => console.log('Or Hasson was here');

const getData = () => ({
  name: 'Or Hasson',
  job: 'Software Engineer',
});

console.log(getData());
