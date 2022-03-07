function solution(str) {
  let answer = true;
  let word = str.toUpperCase();
  const contrary = word.split('').reverse().join('');

  if (contrary !== word) answer = false;
  return answer;
}
console.log(solution('Level'));
