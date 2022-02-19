function solution(str) {
  let answer = 0;

  for (let s of str) {
    let ASCII = s.charCodeAt();
    if (ASCII >= 65 && ASCII <= 90) answer++;
  }
  return answer;
}

console.log(solution('KoreaTimeGood'));
