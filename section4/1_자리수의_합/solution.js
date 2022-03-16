function solution(arr) {
  let answer = 0;
  let maxNum = 0;
  let tempNum = 0;

  arr.forEach((el) => {
    let numArr = String(el).split('');

    for (let i = 0; i < numArr.length; i++) {
      tempNum += Number(numArr[i]);
    }

    if (maxNum < tempNum) {
      maxNum = tempNum;
      answer = el;
    }

    if (maxNum === tempNum) answer = answer > el ? answer : el;
    tempNum = 0;
  });

  return answer;
}
console.log(solution([128, 460, 603, 40, 521, 137, 123]));
