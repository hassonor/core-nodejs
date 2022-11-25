// const PI = Math.PI
// const E = Math.E
// const SQRT2 = Math.Sqrt2


const {PI, E, SQRT2} = Math

// with require
// const {readFile} = require('fs')


const circle = {
    label: 'circleX',
    radius: 5,
}

const circleArea = ({radius}, {precision = 1} = {}) => (PI * radius * radius).toFixed(precision);


console.log(circleArea(circle))
console.log(circleArea(circle, {precision: 3}))
