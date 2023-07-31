// 20230801
// 시험성적
const fs = require('fs')
let input = fs.readFileSync(__dirname + '/input.txt').toString()

let a = parseInt(input)
console.log(a)
if (100 >= a || a >= 90) {
    console.log('A')
} else if (90 > a || a >= 80) {
    console.log('B')
} else if (80 > a || a >= 70) {
    console.log('C')
} else if (70 > a || a >= 60) {
    console.log('D')
} else {
    console.log('F')
}

