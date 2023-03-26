/* Задание 4 */
function anyNumber(number1, number2) {
    let progress = number1;
    let intervalId = setInterval(function() {
      if (progress <= number2) {
        console.log(progress);
        progress++;
      } else clearInterval(intervalId);
    }, 1000);
    
  }
  anyNumber(5, 15) 
