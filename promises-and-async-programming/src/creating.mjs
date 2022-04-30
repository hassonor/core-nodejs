import setText, { appendText } from "./results.mjs";

export function timeout() {
  const wait = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Timeout!");
    }, 1500);
  });

  wait.then(text => setText(text));
}

export function interval() {
  let counter = 0;
  const wait = new Promise((resolve) => {
    setInterval(() => {
      console.log("INTERVAL");
      resolve(`Timeout! ${++counter}`);
    }, 800);
  });

  wait.then(text => setText(text))
    .finally(() => appendText(` -- Done ${counter}`));
}

export function clearIntervalChain() {
  let counter = 0;
  let interval;
  const wait = new Promise((resolve) => {
    interval = setInterval(() => {
      console.log("INTERVAL");
      resolve(`Timeout! ${++counter}`);
    }, 800);
  });

  wait.then(text => setText(text))
    .finally(() => clearInterval(interval));
}

export function xhr() {
  let request = new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/users/7");
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    };

    xhr.onerror = () => reject("Request Failed");
    xhr.send();
  });
  request.then(result => setText(result))
    .catch(reason => setText(reason));

}

export function allPromises() {
  let categories = axios.get("http://localhost:3000/itemCategories");
  let statuses = axios.get("http://localhost:3000/orderStatuses");
  let userTypes = axios.get("http://localhost:3000/userTypes");
  let address = axios.get("http://localhost:3000/addressTypes");

  Promise.all([categories, statuses, userTypes, address])
    .then(([cat, stat, type, address]) => {
      setText("");
      appendText(JSON.stringify(cat.data));
      appendText(JSON.stringify(stat.data));
      appendText(JSON.stringify(type.data));
      appendText(JSON.stringify(address.data));
    })
    .catch(reasons => {
      setText(reasons);
    });
}

export function allSettled() {
  let categories = axios.get("http://localhost:3000/itemCategories");
  let statuses = axios.get("http://localhost:3000/orderStatuses");
  let userTypes = axios.get("http://localhost:3000/userTypes");
  let address = axios.get("http://localhost:3000/addressTypes");

  Promise.allSettled([categories, statuses, userTypes, address])
    .then((values) => {
      let results = values.map(v => {
        if (v.status === "fulfilled") {
          return `FULFILLED: ${JSON.stringify(v.value.data[0])} `;
        }
        return `REJECTED: ${v.reason.message} `;
      });
      setText(results);
    })
    .catch(reasons => {
      setText(reasons);
    });
}

export function race() {
  let users = axios.get("http://localhost:3000/users");
  let backup = axios.get("http://localhost:3001/users");

  Promise.race([users, backup])
    .then(users => setText(JSON.stringify(users.data)))
    .catch(reason => setText(reason));
}