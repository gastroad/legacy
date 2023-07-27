function findKim(seoul){
  var idx = 0;
  //함수를 완성하세요

  for(let i = 0; i <= seoul.length ; i++ ){
    if ("Kim" === seoul[i]) {break;}
    else {++idx;}
  }

  return "김서방은 " + idx + "에 있다";
}

// 실행을 위한 테스트코드입니다.
console.log( findKim(["Queen", "Tod", "Kim"]));
