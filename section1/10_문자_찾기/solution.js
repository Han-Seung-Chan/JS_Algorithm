function solution(str, word) {
  let answer = 0;

  for (let s of str) {
    if (s === word) answer++;
  }
  return answer;
}

console.log(solution('COMPUTERPROGRAMMING', 'R'));
