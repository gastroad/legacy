function fibonacci(num) {
	var answer = 0;
let fibo = 0
let fibo1 = 0
let fibo2 = 1

for(let i=1;i<num;i++){
fibo = fibo1 + fibo2
fibo1 = fibo2
fibo2 = fibo
answer = fibo
}


	return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3))
