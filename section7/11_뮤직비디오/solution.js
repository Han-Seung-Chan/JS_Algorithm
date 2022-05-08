function solution(arr, target) {
  let answer = 0;
  let start = arr.length;
  let end = arr.reduce((acc, cur) => acc + cur, 0);

  arr.sort((a, b) => a - b);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (counter(arr, mid) <= target) {
      answer = mid;
      end = mid - 1;
    } else start = mid + 1;
  }
  return answer;
}

function counter(num, total) {
  let count = 1;
  let sum = 0;

  for (const n of num) {
    if (sum + n > total) {
      count++;
      sum = n;
    } else sum += n;
  }

  return count;
}

console.log(solution([1, 3, 5, 7, 9, 2, 4, 6, 8], 3));
