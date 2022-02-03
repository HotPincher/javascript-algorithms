/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {  
  if ((str) === undefined) {
      return false
    } else if (str.textContent === ' ') {
      return false
    } else {
  let arrayFromString = str.split('  ').join(' ').split(' ').map(function(arrayFromStringElement) {
    if (arrayFromStringElement[1] === undefined) {
      delete arrayFromStringElement[1]
    } else {
    return arrayFromStringElement[0].toUpperCase() + arrayFromStringElement.slice(1)
  }
  })
    return arrayFromString.join(' ')
}
}
    // Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"