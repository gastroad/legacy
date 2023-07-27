function nextSqaure(n){
  var result = 0;
  //함수를 완성하세요
let sum;
for(let i = 0; i < n ; i++){
  if(n === i*i){
     i = i+1
     sum = i*i
    result = sum
    break;
  }else {
    result = "no"
  }
}
  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(2));
