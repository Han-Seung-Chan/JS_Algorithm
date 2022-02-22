function solution(n, arr) {
  let answer = arr[0];
  for (let i = 1; i < 5; i++) {
    if (answer.length < arr[i].length) answer = arr[i];
  }
  return answer;
}
console.log(solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']));
