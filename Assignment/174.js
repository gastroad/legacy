function one(value){
  return value >=1
}

function nextBigNumber(n){
var answer = 0;
 let arr1 = n.toString(2).split("").filter(one)

 for(let i=n+1;i<1000000;i++){
 let arr2 = i.toString(2).split("").filter(one)

 if (arr1.length === arr2.length) {

   answer = i
   break
 }
}





	return answer;
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(nextBigNumber(79));
