function solution(n) {
  let answer = [];
  answer.push(n[0]);

  for (let i = 1; i < n.length; i++) {
    if (n[i - 1] < n[i]) answer.push(n[i]);
  }
  return answer.join(' ');
}
console.log(solution([7, 3, 9, 5, 6, 12]));
