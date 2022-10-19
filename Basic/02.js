// 삼각형 판별하기

function solution1(a, b, c) {
    let answer = "YES", max;
    if (a > b) {
        max = a
        if (b + c > max) {
            answer = "YES"
        } else {
            answer = "NO"
        }
    } else {
        max = b
        if (a + c > max) {
            answer = "YES"
        } else {
            answer = "NO"
        }
    }
    if (max < c) {
        max = c
        if (a + b > max) {
            answer = "YES"
        } else {
            answer = "NO"
        }
    }
    return answer;
}

function solution2(a, b, c) {
    let answer = "YES", max;
    let sum = a + b + c;
    if (a > b) {
        max = a
    } else {
        max = b
    }
    if (max < c) {
        max = c
    }
    if((sum-max)<= max) {
        answer = "NO"
    }
    return answer;
}
console.log(solution2(6, 7, 11));
console.log(solution2(13, 33, 17));