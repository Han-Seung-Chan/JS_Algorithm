function solution(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) return 'YES';
  else return 'NO';
}
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
