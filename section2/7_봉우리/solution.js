function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let up = 0;
  let down = 0;
  let right = 0;
  let left = 0;
  let location = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      location = arr[i][j];
      up = i - 1 < 0 ? 0 : arr[i - 1][j];
      down = i + 1 >= n ? 0 : arr[i + 1][j];
      right = j + 1 >= n ? 0 : arr[i][j + 1];
      left = j - 1 < 0 ? 0 : arr[i][j - 1];

      if (
        location > up &&
        location > down &&
        location > right &&
        location > left
      )
        answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
