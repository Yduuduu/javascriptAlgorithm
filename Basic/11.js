// 대문자 찾기

function solution(s) {
    let answer = 0;
    for (let x of s) {
        //let num=x.charCodeAt(); // 아스키 코드로 판별하는 방법 
        //if(num>=65 && num<=90) {answer++;} // 65~90가 대문자, 97~122가 소문자
        if (x === x.toUpperCase()) {
            // x가 x를 대문자로 바꾸고 같을 경우 카운트+
            answer++;
        }
    }
    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));