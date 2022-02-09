function solution(a, b, c) {
  let result = a;
  if (result > b) result = b;
  if (result > c) result = c;
  return result;
}
console.log(solution(6, 5, 11));
console.log(solution(11, 6, 5));
console.log(solution(5, 11, 6));
