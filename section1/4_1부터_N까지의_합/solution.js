function solution(num) {
  let answer = 0;
  while (num !== 0) {
    answer += num;
    num--;
  }
  return answer;
}
console.log(solution(6));
