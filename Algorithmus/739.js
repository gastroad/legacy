// /**
//  * @param {number[]} T
//  * @return {number[]}
//  */

// let dailyTemperatures = function(T) {
//   for (let i = 0; i < T.length; i++) {
//     for (let j = i; j < T.length; j++) {
//       if (T[i] < T[j]) {
//         T[i] = j - i;
//         break;
//       }
//       if (j == T.length - 1) {
//         T[i] = 0;
//       }
//     }
//   }
//   return T;
// };

/**
 * @param {number[]} T
 * @return {number[]}
 */

var reducer = (accumulator, value, index, array) => {
  console.log(accumulator, value, index, array);
  return accumulator;
};

let dailyTemperatures = function(T) {
  T.reduce(reducer, []);
};
