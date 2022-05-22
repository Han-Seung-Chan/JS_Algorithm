function solution(n) {
  let result = '';
  function answer(v) {
    if (v === 0) return;
    else {
      answer(parseInt(v / 2));
      result += String(v % 2);
    }
  }
  answer(n);
  return result;
}

console.log(solution(11));
