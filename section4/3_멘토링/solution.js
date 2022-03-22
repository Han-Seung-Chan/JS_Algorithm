function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let textCount = arr[i];
    if (i === 0) {
      for (let j = 0; j < textCount.length - 1; j++) {
        for (let k = j + 1; k < textCount.length; k++) {
          answer.push([textCount[j], textCount[k]]);
        }
      }
    } else {
      let caseNum = [...answer];
      answer = [];

      for (let j = 0; j < caseNum.length; j++) {
        let first = caseNum[j][0];
        let second = caseNum[j][1];
        if (textCount.indexOf(first) < textCount.indexOf(second)) {
          answer.push([first, second]);
        }
      }
    }
  }
  return answer.length;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
