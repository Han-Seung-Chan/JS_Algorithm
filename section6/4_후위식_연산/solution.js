function solution(postfix) {
  const arr = [];
  for (const p of postfix) {
    if (!isNaN(p)) {
      arr.push(Number(p));
    } else {
      let num1 = arr.pop();
      let num2 = arr.pop();

      if (p === '+') arr.push(num2 + num1);
      if (p === '-') arr.push(num2 - num1);
      if (p === '*') arr.push(num2 * num1);
      if (p === '/') arr.push(num2 / num1);
      console.log(arr);
    }
  }
  return arr[0];
}

console.log(solution('352+*9-'));
