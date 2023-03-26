/* Задание 3 */
function getSum(func1) {
    return function (func2) {
      return func1 + func2;
    }
}
console.log(getSum(2)(3));