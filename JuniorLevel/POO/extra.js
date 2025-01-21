/**
 * Crear una funcion que tome una lista de numeros repetidos, la funcion debe de encargarse de retornar la lista sin numeros repetidos
 */

let numbers = [1, 2, 1, 14, 2, 15, 16, 2, 14, 14, 2]

let result = numbers.filter((number,index) => !numbers.slice(index+1).includes(number))

console.log(result)