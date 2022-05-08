function solution(arr, target) {
  let answer = 0;

  let start = 0;
  let end = arr.length - 1;
  arr.sort((a, b) => a - b);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) end = mid - 1;
    else if (arr[mid] < target) start = mid + 1;
    else if (arr[mid] === target) return mid + 1;
  }
}

console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
