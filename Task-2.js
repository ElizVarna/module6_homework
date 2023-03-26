/* Задание 2 */
function anyPresentNumber(num) {
  if (num > 1000) return "Данные неверны.";
  if (num === 0) return  "Ноль - есть ноль. Число ненатуральное.";
  if (num === 1) return "Один - есть один. Не простой и не составной.";

  let anyCount = 0;
  for (let i = 1; i <= num; i++) {
      if (num % i === 0) anyCount++;
  }
  if (anyCount === 2)
      return "Число простое.";
  else
      return "Число составное.";
}
console.log(anyPresentNumber(19))