function printTriangle(num) {
  var result = ''
  for(let i = 1; i<num+1; i++){
    for(let j =0; j<i; j++){
    result = result + "*"
  }
  result = result +"\n"
  }

  // 함수를 완성하세요
  return result
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( printTriangle(3) );
