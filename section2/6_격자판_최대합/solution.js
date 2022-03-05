function solution(arr) {
  let answer = [];
  let width = 0;
  let height = 0;
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    width = 0;
    height = 0;
    leftDiagonal += arr[i][i];
    rightDiagonal += arr[i][arr.length - i - 1];

    for (let j = 0; j < arr.length; j++) {
      width += arr[i][j];
      height += arr[j][i];
    }
    answer.push(width, height);
  }
  answer.push(leftDiagonal, rightDiagonal);

  answer.sort((a, b) => b - a);
  return answer[0];
}
console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
