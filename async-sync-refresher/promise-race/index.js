const askOr = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('Yep, I got one extra pen.'),3000);
    })
}

const askDor = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> reject('Sorry man, got only one.'),1000);
    })
}

const askJeki= () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('Sure, I have a pen for you.'),2000);
    })
}

Promise.race([askOr(),askDor(),askJeki()]).then(value=>{
    console.log(value);
}).catch(error=> console.log(error));
