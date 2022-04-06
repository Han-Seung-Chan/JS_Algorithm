function solution(a, arr) {
  let answer = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count += arr[i];
    answer += 1;
    for (let j = i + 1; j < arr.length; j++) {
      count += arr[j];
      if (count <= a) {
        answer += 1;
      }
      if (count > a) {
        count = 0;
        break;
      }
    }
  }

  return answer;
}
console.log(solution(5, [1, 3, 1, 2, 3]));
