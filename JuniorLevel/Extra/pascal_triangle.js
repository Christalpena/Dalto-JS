/*
 * Crea una función que sea capaz de dibujar el "Triángulo de Pascal"
 * indicándole únicamente el tamaño del lado.
 *
 * - Aquí puedes ver rápidamente cómo se calcula el triángulo:
 *   https://commons.wikimedia.org/wiki/File:PascalTriangleAnimated2.gif
 */

function pascalTriangle(side){
    let triangle = [[1],[1,1]]
    for(let i = 1; i< side-1; i++){
        triangle.push([1])
        for(let a = 0; a < triangle[i].length -1; a++){
            triangle[i+1].push(triangle[i][a] + triangle[i][a+1])
        }
        triangle[i+1].push(1)
    }
    return triangle
}

console.log(pascalTriangle(10))

