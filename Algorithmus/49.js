/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  var result = [];
  for (let i = 0; i < strs.length; i++) {
    var pushAraay = [strs[i]];
    temp = JSON.stringify(strs[i].split("").sort());
    for (let j = i + 1; j < strs.length; j++) {
      if (temp == JSON.stringify(strs[j].split("").sort())) {
        pushAraay.push(strs[j]);
        strs.splice(j, 1);
        console.warn(strs, j);
      }
    }
    result.push(pushAraay);
  }
  return result;
}

var groupAnagrams = function(strs) {
  let res = {};
  for (let str of strs) {
    let tmp = str
      .split("")
      .sort()
      .join("");
    if (res[tmp] == null) res[tmp] = [str];
    else res[tmp].push(str);
  }
  console.log(res);
  return Object.values(res);
};
