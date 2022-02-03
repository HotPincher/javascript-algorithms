/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    const vowelArray = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
    const arrayFromString = str.toLowerCase().split('')
    let interimValue = 0
    for (let i = 0; i < arrayFromString.length; i++) {
        for (let n = 0; n < vowelArray.length; n++) {
            if (arrayFromString[i] === vowelArray[n]) {
                interimValue += 1
            }
        } 
    }
  return interimValue 
} 


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3