function solution(num, words) {
  const answer = [];
  for (let word of words) {
    if (answer.indexOf(word) === -1) answer.push(word);
  }
  return answer.join(' ');
}
console.log(solution(5, ['good', 'time', 'good', 'time', 'student']));
