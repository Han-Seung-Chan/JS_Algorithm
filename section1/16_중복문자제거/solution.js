function solution(str) {
  let answer = [];
  for (let s of str) {
    if (answer.includes(s) === false) answer.push(s);
  }
  return answer.join('');
}
console.log(solution('keyset keyset'));
