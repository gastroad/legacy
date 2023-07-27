function longest_palindrom(s){
  // 함수를 완성하세요
  if (s === s.split("").reverse().join("")) {
    console.log(s, s.length)
    return s.length;
  } else {

    console.log(s);
    let A = longest_palindrom(s.substring(0, s.length-1));
    let B = longest_palindrom(s.substring(1, s.length));

    return Math.max(A, B);

  }
}








// 아래는 테스트로 출력해 보기 위한 코드입니다.

console.log( longest_palindrom("토마토맛있어") )
