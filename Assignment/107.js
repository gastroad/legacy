function waterMelon(n){
  var result = []
  //함수를 완성하세요
  var flag = 0;
  for (var i = 0; i < n; i++) {
    if (flag === 0){
       result.push('수');
       flag = 1; }
    else {
       result.push('박');
       flag = 0; }
  }
  return result.join()

}

// 실행을 위한 테스트코드입니다.
console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
