	function compNumber(a, b) {
	  return a - b;
	}
		function getMinSum(A,B){
			var answer = 0;
			let j = B.length-1
			let i = 0
			let c = 0
				A.sort(compNumber)
				B.sort(compNumber)
			while ( i < A.length) {
			answer	+= A[i]*B[j]
			i++
			j--
			}

			return answer;
		}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var tA = [1,2,3,4],
	tB = [1,2,3,4];

console.log(getMinSum(tA,tB));
