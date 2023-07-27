function jumpCase(num) {
	var answer = 0;
  var fi1 = 1, fi2 = 1;

  for (var i=1; i<num; i++) {
    answer = fi1 + fi2;
    fi1 = fi2;
    fi2 = answer;
  }

	return answer;
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(4));
