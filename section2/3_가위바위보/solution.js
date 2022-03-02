function solution(a, b) {
  let answer = '';
  a.forEach((el, i) => {
    el === b[i]
      ? (answer += 'D ')
      : el - b[i] === 1
      ? (answer += 'A ')
      : (answer += 'B ');
  });
  return answer;
}
console.log(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
