// 문자 찾기

function solution1(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) {
            answer++
        }
    }
    return answer;
}

function solution2(s, t) {
    let answer = s.split(t).length;
    return answer - 1; // length 때문에 -1을 해준다.
}

let str = "COMPUTERPROGRAMMING";
console.log(solution2(str, 'R'));