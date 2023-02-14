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


zoom session 필기
그림을 그려라


2023. 02. 14
      
## part 1. daily coding



## part 2. 재귀 - json.stringfy

[https://www.json.org/json-en.html](https://www.json.org/json-en.html)


JSON의 기본 규칙
JSON은 얼핏 보기에 자바스크립트의 객체와 별반 다를 바가 없어 보이지만, 자바스크립트의 객체와는 미묘하게 다른 규칙이 있습니다.

자바스크립트 객체	JSON
키	키는 따옴표 없이 쓸 수 있음
{ key : "property" }	반드시 쌍따옴표를 붙여야 함
'{"key":"property"}'
문자열 값	작은따옴표도 사용 가능
{ "key" : 'property' }	반드시 큰따옴표로 감싸야 함
'{"key":"property"}'
키와 값 사이 공백	사용 가능
{"key" : 'property'}	사용 불가능
'{"key":"property"}'
키-값 쌍 사이 공백	사용 가능
{ "key":'property', num:1 }	사용 불가능
'{"key":"property","num":1}'



