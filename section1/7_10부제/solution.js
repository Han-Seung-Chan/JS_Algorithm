function solution(date, cars) {
  let answer = 0;
  for (let i = 0; i < cars.length; i++) {
    if (cars[i] % 10 === date) answer++;
  }
  return answer;
}
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
