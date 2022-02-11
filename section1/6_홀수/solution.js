function solution(arr) {
  let min = [];
  let answer = 0;

  for (let el of arr) {
    if (el % 2 !== 0) {
      answer += el;
      min.push(el);
    }
  }
  min = Math.min(...min);
  return [answer, min];
}

console.log(solution([12, 77, 38, 41, 53, 92, 85]));
