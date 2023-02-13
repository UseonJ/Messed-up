2023.02.13

Unit 1 = 재귀

function arrSum (arr) {
  // 빈 배열을 받았을 때 0을 리턴하는 조건문
  //   --> 가장 작은 문제를 해결하는 코드 & 재귀를 멈추는 코드
  if (arr.length === 0) {
    return 0
  }

  // 배열의 첫 요소 + 나머지 요소가 담긴 배열을 받는 arrSum 함수
  //   --> 재귀(자기 자신을 호출)를 통해 문제를 작게 쪼개나가는 코드
    return arr.shift() + arrSum(arr) // 하... 이런식으로 쓴 적이 예전에 한 번 있긴한거같은데 충격이다... 아직 많이 멀었따
}

1. 입출력값 정하기

arrSum: [number] => number ← 입출력값 정의


2. 문제를 쪼개고 경우의 수를 나누기 

3. 단순한 문제 해결하기

4. 복잡한 문제 해결하기

5. 코드 구현하기

// 템플릿
function recursive(input1, input2, ...) {
  // base case : 문제를 더 이상 쪼갤 수 없는 경우
  if (문제를 더 이상 쪼갤 수 없을 경우) {
    return 단순한 문제의 해답;
  }

  // recursive case : 그렇지 않은 경우
  return 더 작은 문제로 새롭게 정의된 문제
}


