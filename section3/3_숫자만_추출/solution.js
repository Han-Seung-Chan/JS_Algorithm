function solution(str) {
  const answer = str.replace(/[^0-9]/g, '');
  return answer;
}
console.log(solution('gOen2T0s8eSoft'));
