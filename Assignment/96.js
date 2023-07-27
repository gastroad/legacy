function numPY(s){
  var result = true;
  //함수를 완성하세요

let arr1 = s.toLowerCase();
let arr2 = arr1.split("")
let countp = 0;
let county = 0;
for (let i = 0; i < arr2.length; i++) {
if (arr2[i] === 'p') {
  countp++
}else if (arr2[i] ==="y") {
  county++
}
}
if (countp != county) {
  result = false
}
  return result;
}
// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )
