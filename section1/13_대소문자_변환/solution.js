function solution(str) {
  let answer = '';

  for (let s of str) {
    let ASCII = s.charCodeAt();
    if (ASCII >= 65 && ASCII <= 90) answer += String.fromCharCode(ASCII + 32);
    else answer += String.fromCharCode(ASCII - 32);
  }
  return answer;
}
console.log(solution('StuDY'));
