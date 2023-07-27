function productMatrix(A, B) {
   let row_a = A.length
   let col_a = A[0].length

   let row_b = B.length
   let col_b = B[0].length

   var answer = [row_a]

   for (let i = 0; i < row_a; i++) {
      answer[i] =  Array(col_b)
  }

   var result = 0

   for (let i = 0; i < row_a; i++) {
      for (let j = 0; j < col_b; j++) {
         result = 0;
         for (let k = 0; k < row_b; k++) {
            result += A[i][k] * B[k][j]
      		}
      answer[i][j] = result
    }
  }

   return answer
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
var a = [ [1,2],[4,5] ];
var b = [ [1,2],[4,5] ];
console.log("결과 : " + productMatrix(a, b));
