function solution(arr) {
  let answer = [];

  for (let n of arr) {
    if (n < 0) answer.push(n);
  }
  for (let n of arr) {
    if (n > 0) answer.push(n);
  }

  return answer;
}

console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));
