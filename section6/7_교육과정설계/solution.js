function solution(need, plan) {
  let answer = 'YES';
  const tempArr = [];

  for (const word of need) {
    tempArr.push(plan.indexOf(word));
  }

  if (tempArr.includes(-1)) return 'NO';

  for (let i = 0; i < tempArr.length - 1; i++) {
    if (tempArr[i] > tempArr[i + 1]) return 'NO';
  }

  return answer;
}

console.log(solution('CBA', 'CBDAGE'));
console.log(solution('CBA', 'CGEADB'));
