function solution(str) {
  let answer = '';
  let sameStr = str[0];
  let count = 1;

  for (let i = 1; i < str.length + 1; i++) {
    if (sameStr !== str[i]) {
      if (count !== 1) answer += str[i - 1] + count;
      else answer += str[i - 1];
      sameStr = str[i];
      count = 1;
    } else count++;
  }

  return answer;
}
console.log(solution('KKHSSSSSSSE'));
