function solution(arr, target) {
  let answer = 0;
  let start = 1;
  let end = arr[arr.length - 1];
  arr.sort((a, b) => a - b);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (counter(arr, mid) >= target) {
      answer = mid;
      start = mid + 1;
    } else end = mid - 1;
  }
  return answer;
}

function counter(num, total) {
  let count = 1;
  let point = num[0];

  for (const n of num) {
    if (n === point) continue;

    if (n - point >= total) {
      count++;
      point = n;
    }
  }

  return count;
}

console.log(solution([1, 2, 8, 4, 9], 3));
