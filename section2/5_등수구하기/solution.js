function solution(arr) {
  const answer = [];
  const copyArr = arr.slice();

  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    answer.push(arr.indexOf(copyArr[i]) + 1);
  }
  return answer;
}
console.log(solution([91, 92, 93, 94, 95]));
console.log(solution([91, 92, 92, 92, 95]));
