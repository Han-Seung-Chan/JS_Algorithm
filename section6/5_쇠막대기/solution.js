function solution(s) {
  const tempArr = [];
  let answer = 0;

  const arr = s.split('');
  arr.forEach((el, idx) => {
    if (el === '(') tempArr.push(el);
    else {
      tempArr.pop();
      if (arr[idx - 1] === '(') answer += tempArr.length;
      else answer++;
    }
  });

  return answer;
}

console.log(solution('()(((()())(())()))(())'));
console.log(solution('(((()(()()))(())()))(()())'));
