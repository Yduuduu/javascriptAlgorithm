// 20230731
// 브론즈 5
// 사칙연산
const fs = require('fs')
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n')
let line = input[0].split(' ')

let a = parseInt(line[0])
let b = parseInt(line[1])

console.log(a)
console.log(b)
console.log(a - b)
console.log(a * b)
// console.log(Math.floor(a / b))
console.log(parseInt(a / b))
console.log(a % b)