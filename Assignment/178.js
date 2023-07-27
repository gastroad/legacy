function getDayName(a,b){
	var answer = "";
  var week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
  var today = new Date('2016-'+a+'-'+b).getDay();
   answer = week[today];

	return answer
}

//아래 코드는 테스트를 위한 코드입니다.
console.log(getDayName(5,24));
