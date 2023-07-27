function gcd( x, y ) {
  let tmp
  let tmpX = x
  let tmpY = y

    while( tmpY ) {
        tmp = tmpX % tmpY
        tmpX = tmpY
        tmpY = tmp
    }
    return x * y / tmpX
};


function nlcm(nums) {
  var result = 0;

  for(let i = 1; i < nums.length; i++) {
      result = nums[i] = gcd(nums[(i-1)], nums[i])

  }
  return result;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(nlcm([2,6,8,14]));
