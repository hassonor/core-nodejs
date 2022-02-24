const x = function () {
    // "this" here is the caller of x
}

const y = () => {
    // "this" here is NOT the caller of y
    // It's the same this found in y's scope.
}


// "this" here is "exports"
this.id = 'exports';
console.log(this) // will print { id: 'exports' }


const testerObj = {
    func1: function () {
        console.log('func1', this);
    },
    func2: () => {
        console.log('fun2', this);
    },
};

testerObj.func1()
testerObj.func2()