function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    let pointer = arr[i];
    let j = 0;
    for (j = i - 1; j >= 0 && arr[j] > pointer; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = pointer;
  }
  return arr;
}

console.log(solution([11, 7, 5, 6, 10, 9]));

/* 삽입 정렬

삽입 정렬은 두 번째 자료부터 시작하여 그 앞(왼쪽)의 자료들과 비교하여 삽입할 위치를 지정한 후 자료를 뒤로 옮기고 지정한 자리에 자료를 삽입하여 정렬하는 알고리즘이다.
*/
