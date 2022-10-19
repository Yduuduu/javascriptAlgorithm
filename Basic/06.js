// 홀수

function solution(arr) {
    let answer = []; // 답을 두개를 띄워야하니 배열로 선언
    let sum = 0, min = Number.MAX_SAFE_INTEGER;
    for (let x of arr) {
        if (x % 2 === 1) {
            sum += x; // sum = sum + x 와 같은 뜻
            if (x < min) {
                min = x;
            }
        }
    }
    answer.push(sum)
    answer.push(min)

    return answer;
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));