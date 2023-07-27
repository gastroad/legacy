function is_pair(s){

  // 함수를 완성하세요
  let a = s.split("")
  let sum =0
  for(let i in a){

    if (a[i] == "("){
      sum +=1
    }else if (a[i] == ")") {
      sum -=1

    }
    if (sum < 0) {
      return false;

    }
  }
  return sum==0;
  }

  // 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log( is_pair("(hello)()") )
  console.log( is_pair(")(") )
