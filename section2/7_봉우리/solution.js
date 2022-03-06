function solution(arr) {
  let answer = 0;
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    for (let j = 1; j < length; j++) {
      if (
        arr[i][j] > arr[i][j - 1] &&
        arr[i][j] > arr[i][j + 1] &&
        arr[i][j] > arr[i + 1][j] &&
        arr[i][j] > arr[i - 1][j]
      )
        answer++;
    }
  }
  return answer;
}
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 5, 3, 7, 2, 3, 0],
    [0, 3, 7, 1, 6, 1, 0],
    [0, 7, 2, 5, 3, 4, 0],
    [0, 4, 3, 6, 4, 1, 0],
    [0, 8, 7, 3, 5, 2, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ])
);
