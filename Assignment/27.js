function noOvertime(no, works) {
var result = 0;
let i=0
let sum=0
while (no > 0 ){
		works.sort(function(a, b){
			return b - a;
		})
		let j = Math.max.apply(null,works)
		j -=1
		works[0] = j
		no--
}

for(let k =0; k <works.length; k++){
		  sum = works[k]*works[k]
 			result += sum
}




	// 야근 지수를 최소화 하였을 때의 야근 지수는 몇일까요?

	return result;
}



console.log(noOvertime(4,[4,3,3]))
