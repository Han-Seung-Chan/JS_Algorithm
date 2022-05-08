function solution(arr) {
  let answer = 0;
  let endTime = 0;

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (const n of arr) {
    if (n[0] >= endTime) {
      answer++;
      endTime = n[1];
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);

console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
