function alpha_string46(s){
  var result;
  // 함수를 완성하세요
let a = s.split("")
s *= 1;
    if (typeof(s) === "string" ) {
    return  false
    }
    else{
      switch (a.length){
        case 4:
        return true
        break;
        case 6:
        return true
        break;
        default:
        return false
        break;
      }

    }

}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("1234") );
