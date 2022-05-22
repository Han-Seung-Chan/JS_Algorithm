function solution(n) {
  let result = '';
  function answer(v, a) {
    if (v <= 0) return;
    else {
      result += String(a);
      answer(--v, ++a);
    }
  }
  answer(n, 1);
  return result;
}

console.log(solution(3));
