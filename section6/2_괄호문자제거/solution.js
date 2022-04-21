function solution(str) {
  let answer = '';
  const open = [];
  const close = [];

  for (const s of str) {
    if (s === ')') close.push(1);
    if (s === '(') open.push(1);

    if (open.length !== close.length) continue;
    if (s === ')') continue;

    answer += s;
  }

  return answer;
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
