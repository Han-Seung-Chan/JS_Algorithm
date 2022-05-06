function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[temp] > arr[j]) temp = j;
    }
    [arr[i], arr[temp]] = [arr[temp], arr[i]];
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));

/* 선택 정렬 

선택 정렬은 첫 번째 자료를 두 번째 자료부터 마지막 자료까지 차례대로 비교하여 가장 작은 값을 찾아 첫 번째에 놓고, 두 번째 자료를 세 번째 자료부터 마지막 자료까지와 차례대로 비교하여 그 중 가장 작은 값을 찾아 두 번째 위치에 놓는 과정을 반복하며 정렬을 수행한다.
*/
