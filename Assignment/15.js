function collatz(num) {
	var answer = 0;
  let q=1

while(q<501){
    if (num% 2 == 0 ){
      num /= 2
    }else {
      num = num*3 + 1
    }


      if (q === 500) {
        q = -1
        break
      }else if (num === 1) {
        break
      }
 q ++
}





answer = q
	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( collatz(6) );
