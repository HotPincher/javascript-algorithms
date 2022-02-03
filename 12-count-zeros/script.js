/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
   if (n < 10 || n === 0) {
    return 0
   } else if (n >= 10 && n < 100) {
    return n / 10
   } else if (n > 10 && n === 100) {
    return n / 10 + 1
   } else if (n > 100) {
      let firstDecimalOfEachHundered = 10
      let hundredsInValue = Math.floor(n / 100)
      let decimalsInValue = Math.floor((n % 100) / 10)
      return (((hundredsInValue - 1) * 20) + firstDecimalOfEachHundered) + (firstDecimalOfEachHundered + decimalsInValue)
   } 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
