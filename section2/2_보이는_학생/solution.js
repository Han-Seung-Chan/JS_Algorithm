function solution(array) {
  let answer = 0;
  let maxHeight = 0;

  array.forEach((el) => {
    if (maxHeight < el) {
      answer++;
      maxHeight = el;
    }
  });

  return answer;
}
console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
