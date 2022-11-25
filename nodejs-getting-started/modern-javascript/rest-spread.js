const [first, ...rest] = [11, 22, 33, 44]

console.log(rest)

const data = {
    temp_1: '001',
    temp_2: '002',
    firstName: 'Or',
    lastName: 'Hasson'
};

const {temp_1, temp2, ...person} = data;

console.log(person)

const newArray = [...rest];

const newObject = {
    ...person,
}


