function sumMatrix(A,B){
  let answer = Array(A.length)
  for(let i = 0; i < A.length; i++) answer[i] = Array(A[0].length)

  for(let  i = 0; i < A.length; i++){
    for(let  j = 0; j < A[0].length; j++){

      answer[i][j] = A[i][j] + B[i][j]

    }

  }

  return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))
