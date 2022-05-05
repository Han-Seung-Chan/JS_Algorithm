function solution(n, k) {
  let answer = 0;
  let pointer = 1;

  const tempArr = Array.from({ length: n }, (v, i) => i + 1);

  while (tempArr.length) {
    if (pointer === k) {
      tempArr.shift();
      pointer = 1;
    } else {
      tempArr.push(tempArr.shift());
      pointer++;
    }
    if (tempArr.length === 1) answer = tempArr.shift();
  }

  return answer;
}

console.log(solution(8, 3));
