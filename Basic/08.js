// 일곱난쟁이

function solution(n) {
    let answer = arr;
    let sum = arr.reduce((a, b) => a + b, 0) // reduce 누적 함수, a를 0으로 초기화

    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if ((sum - (arr[i] + arr[j])) === 100) {
                arr.splice(j, 1); //splice 특정 인덱스를 삭제, i를 지우는 과정에서 배열이 당겨져서 잘못 지워지는 경우가 있기 때문에 j를 먼저 지운다.
                arr.splice(i, 1);
            }
        }
    }

    return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));