// 최솟값 구하기

function solution1(arr) {
    let answer, min = Number.MAX_SAFE_INTEGER; // MAX_SAFE_INTEGER -> 가장 큰 안정적인 정수 값이 출력된다.
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
        answer = min
    }
    return answer;
    // 가장 먼저 Number.MAX_SAFE_INTEGER로 큰 값으로 초기화 시켜준 후, 배열을 돌면서 작은 숫자들을 넣으면서 종료한다.
}

// 보충 코드
function solution2(arr) {
    let answer = Math.min(...arr); // 배열일 경우, 스프레드 연산자로 인자를 넘겨줘야한다.
    // Math.max(...arr); -> 최댓값
    // Math.min.apply(null, arr); -> 최솟값. 두번째 인자에 배열을 넣어야 한다. 
    return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution2(arr));