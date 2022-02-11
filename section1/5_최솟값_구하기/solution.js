function solution(arr) {
  const answer = arr.sort((a, b) => a - b);
  return answer[0];
}
console.log(solution([5, 3, 7, 11, 2, 15, 17]));
