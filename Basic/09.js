// A를 #으로

function solution1(s) {
    let answer = "";
    for (let x of s) {
        if (x === 'A') {
            answer += '#'
        } else {
            answer += x
        }
    }
    return answer;
}

function solution2(s) {
    let answer = s;
    answer = answer.replace(/A/g, '#'); // g를 붙여야 전역으로 바꿔준다.
    return answer;
}

let str = "BANANA";
console.log(solution2(str));