/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    let value = 1
    for (let i = 0; i < num; i++) {
      if (value % 3 === 0 && value % 5 === 0) {
        value += 1
        console.log('fizzbuzz')
    } else if (value % 3 === 0) {
        value += 1
        console.log('fizz')
    } else if (value % 5 === 0) {
        value += 1
        console.log('buzz') 
    } else {
        console.log(value);
        value += 1
      }  
    }     
}

// Протестируйте решение, вызывая функцию с разными аргументами:

fizzBuzz(15);