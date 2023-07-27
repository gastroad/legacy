
function isPalindrome(string) {
  for (i = 0; i < (string.length / 2); i++) {
    if (string.charAt(i) != string.charAt((string.length - 1) - i)) {
      return false;
    }
  }
  return true
}
var countSubstrings = function (s) {
  let result = []
  let arrayString = s.split("")
  for (let i = 0; i < arrayString.length; i++) {
    let pushString = arrayString[i]
    for (let j = i + 1; j < arrayString.length; j++) {
      pushString = pushString + arrayString[j]
      if (isPalindrome(pushString)) {
        arrayList.push(pushString)
      }
    }
  }
  return arrayList.length + arrayString.length
};


