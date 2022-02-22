function solution(s) {
  let answer = '';
  answer = s;
  while (answer.length > 2) {
    if (answer.length > 2) {
      answer = answer.substring(1, 5);
      answer = answer.substring(0, answer.length - 1);
    }
  }
  return answer;
}
console.log(solution('study'));
console.log(solution('good'));
