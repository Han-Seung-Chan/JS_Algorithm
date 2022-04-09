function solution(k, arr) {
  let answer = 0;
  let total = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    total += arr[i];
    for (let j = i + 1; j <= i + 2; j++) {
      total += arr[j];
    }
    if (total > answer) answer = total;
    total = 0;
  }
  return answer;
}
console.log(solution(3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
