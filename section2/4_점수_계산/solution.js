function solution(arr) {
  let answer = 0;
  let plusScore = 0;

  arr.forEach((el) => {
    if (el === 0) plusScore = 0;
    else answer += ++plusScore;
  });
  return answer;
}
console.log(solution([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
