const fs = require("fs").promises;

async function getSum() {
  let data = await fs.readFile("./data.json", "utf-8");
  data = JSON.parse(data);
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i].salary;
  }
  console.log(sum);
}


getSum();