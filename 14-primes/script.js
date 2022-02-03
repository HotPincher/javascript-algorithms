/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    let initialArray = []
    let primeArray = []
    
    for (let i = 2; i <= num; i++) {
        initialArray.push(i)
    }

    initialArray.map(function(el) {
        if (el===2) {
        primeArray.push(el)
        } else if (
            (el > 2 && (el / 2) % 2 === 0) || 
            ((el > 2) && (el / 2) + 1) % 2 === 0 || 
            (el / 3) % 3 === 0 || (el / 3) % 5 === 0 || 
            (el / 5) % 5 === 0 || (el / 3) % 7 === 0) {
        return false
        } else {
        return primeArray.push(el)
        } 
      })
    return primeArray  
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(94)); // [2, 3, 5, 7, 11, 13, 17]