// 20230730
// 브론즈
// 1000번 A+B
const fs = require('fs');
let input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');
let line = input[0].split(' ');

let a = parseInt(line[0]);
let b = parseInt(line[1]);

console.log(a + b);