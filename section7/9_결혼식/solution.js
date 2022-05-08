function solution(arr) {
  let answer = 0;
  let pos = 0;

  arr.sort((a, b) => a[1] - b[1]);
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[pos][1] > arr[i][0]) answer++;
    else {
      pos++;
      break;
    }
  }

  return answer;
}

console.log(
  solution([
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);

console.log(
  solution([
    [1, 10],
    [2, 8],
    [3, 9],
  ])
);
