function solution(arr1, arr2) {
  const answer = [];

  arr1.forEach((el1) => {
    arr2.forEach((el2) => {
      if (el1 === el2) answer.push(el1);
    });
  });

  answer.sort((a, b) => a - b);
  return answer;
}
console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
