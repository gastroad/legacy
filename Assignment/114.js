function toWeirdCase(s){


  var result = ""
  //함수를 완성해주세요

  let s1 = s.split(" ")
  let s2=''
  for(let i = 0; i < s1.length; i++){
      for(let j =0 ; j<s1[i].length ; j++)
      {
          if(j%2==0)
          {
            s2 = s2+ s1[i][j].toUpperCase()
          }
          else {
            {
                s2 = s2+ s1[i][j].toLowerCase()
            }
          }
      }
      s2=s2+' '
      }

  return result = s2.substr(0 , s2.length-1)
 }
// 아래는 테스트로 출력해 보기 위한 코드입니다.
  console.log("결과 : " + toWeirdCase("try hello world"));
