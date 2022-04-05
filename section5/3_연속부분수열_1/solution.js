function solution(a, arr) {
  let count = 0;
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      count += arr[j];
      if (count === a) {
        answer += 1;
        count = 0;
        break;
      }
      if (count > a) {
        count = 0;
        break;
      }
    }
  }

  return answer;
}

console.log(solution(6, [1, 2, 1, 3, 1, 1, 1, 2]));
