function Harshad(n){
  var result ;
  //함수를 완성하세요
  let sum = 0
  let str = n.toString()
  let res = str.split("")
  let min


  for (var i = 0; i < res.length; i++) {
  sum += parseInt(res[i])
  }
if (n%sum === 0) {
  result = true
}else {
  result = false
}


  return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(Harshad(18))
