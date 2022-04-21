function solution(bracket) {
  const open = [];
  const close = [];

  for (const b of bracket) {
    if (b === '(') open.push('(');
    if (b === ')') close.push(')');
  }

  if (open.length === close.length) return 'YES';
  else return 'NO';
}

console.log(solution('(()(()))(()'));
