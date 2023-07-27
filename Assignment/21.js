function numberOfPrime(n) {
  var result = 0;
  let a=0;

    for(let i=2; i<=n; i++){
      result = true
    	for(let j=2; j<i; j++){
        if(i%j==0){
          result = false
        }
      }
      if(result){a++;}
    }

	return a;

}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numberOfPrime(100) )
