function solution(n) {
  let result = '';
  function answer(v) {
    if (v > 7) return;
    else {
      result += String(v); // 전위순위
      answer(v * 2);
      //  result += String(v); // 중위순위
      answer(v * 2 + 1);
      // result += String(v); // 후위순위
    }
  }
  answer(n);
  return result;
}

console.log(solution(1));
