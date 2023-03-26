/* Задание 1 */
let array = [13, 13, "q", 20, 45, 66, "e",  20, 18, 15, "f",null, 20, null ];
function countEvenAndOddElements() {
    let even = 0;
    let odd = 0;
    array.map(function (item, index, array) {
        if (item == null) {
            console.log("Элемент " + index + " равен null.");
            return;
        }
        if (typeof item == "string") {
            console.log("Элемент " + item + " - строка.");
            return;
        }
        if (item % 2 === 0) even++;
        else odd++;
    });
    console.log("Чётных: " + even);
    console.log("Нечётных: " + odd);
}
countEvenAndOddElements();