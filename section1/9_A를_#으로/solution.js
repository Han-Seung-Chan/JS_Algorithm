function solution(str) {
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'A') answer += '#';
    else answer += str[i];
  }
  return answer;
}

console.log(solution('BANANA'));
