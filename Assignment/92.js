function adder(a, b){
    var result = 0
    //함수를 완성하세요
    let vo

    if (a > b) {
      vo = a
      a = b
      b = vo
    }

for(let i = a ; i<=b ; i++){
   result += a
   a++
}


    return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( adder(3, 5) )
