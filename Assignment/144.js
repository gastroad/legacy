function caesar(s, n) {
	var result = []
	// 함수를 완성하세요.
n = n % 26
for(let i = 0; i < s.length; i++){
    let ascii = s[i].charCodeAt(0)
    if (ascii > 64 && ascii < 91) {
        ascii += n
        if (ascii > 90) {
        result.push(String.fromCharCode(ascii-26))
        }
        else {
        result.push(String.fromCharCode(ascii))
        }
    }else if (ascii > 96) {
       ascii += n
       if (ascii > 122) {
       result.push(String.fromCharCode(ascii-26))
       }
       else {
       result.push(String.fromCharCode(ascii))
      }
    }else {
      result.push(" ")
    }
}
	return result.join("")
}




// 실행을 위한 테스트코드입니다.
console.log(caesar("a B z", 3));
