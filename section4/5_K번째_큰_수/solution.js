function solution(n, k, card) {
  let answer = [];

  let sum;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        sum = card[i] + card[j] + card[k];

        if (answer.indexOf(sum) === -1 || answer.length === 0) {
          answer.push(sum);
        }
      }
    }
  }

  answer.sort((a, b) => b - a);

  return answer[k - 1];
}

console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
