/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) { 
    let arr = []
    let factorialValue = 0
    
    for (let i = 1; i <= n; i ++) {
    arr.push(i)    
    }
    if (arr.length > 0) { 
        factorialValue = arr.reduce((previousValue, newValue) => {
        return previousValue *= newValue
        })      
    }  else {
        factorialValue = 1
    } 
    return factorialValue 
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720