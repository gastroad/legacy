function gcdlcm(a, b) {
    var answer = [];
    let max, min
    if (a > b) {
      let val = a
      a = b
      b = val
    }
    for(let i=a; i>0 ; i--) {
	     if( a%i == 0 && b%i==0 ) {
		       max = i
		         break
	          }
    }
  min = a*b/max
  answer = [max,min]
  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(gcdlcm(3,12));
