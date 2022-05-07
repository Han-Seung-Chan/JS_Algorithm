function solution(arr) {
  const answer = [];

  arr
    .slice()
    .sort((a, b) => a - b)
    .forEach((vl, idx) => {
      if (vl !== arr[idx]) answer.push(idx + 1);
    });

  return answer;
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));
