function solution(str, alphabet) {
  const answer = [];
  const leftResult = [];
  const rightResult = [];
  const length = str.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    if (str[i] !== alphabet) {
      count++;
      leftResult.push(count);
    } else {
      count = 0;
      leftResult.push(count);
    }
  }

  for (let i = length - 1; i >= 0; i--) {
    if (str[i] !== alphabet) {
      count++;
      rightResult.unshift(count);
    } else {
      count = 0;
      rightResult.unshift(count);
    }
  }

  for (let i = 0; i < length; i++) {
    if (leftResult[i] <= rightResult[i]) answer.push(leftResult[i]);
    else answer.push(rightResult[i]);
  }

  return answer;
}
console.log(solution('teachermode', 'e'));
