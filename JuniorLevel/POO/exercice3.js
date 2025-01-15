

class Calculator{
    constructor(){
    }

    add(){
        let num1 = parseInt(prompt("Ingrese el Primer numero de la suma"))
        let num2 = parseInt(prompt("Ingrese el segundo numero de la suma"))
        document.write(num1 + num2)
    }

    subtract(){
        let num1 = parseInt(prompt("Ingrese el Primer numero de la resta"))
        let num2 = parseInt(prompt("Ingrese el segundo numero de la resta"))
        document.write(num1 - num2)
    }

    multiply(){
        let num1 = parseInt(prompt("Ingrese el Primer numero"))
        let num2 = parseInt(prompt("Ingrese el segundo numero"))     
        document.write(num1 * num2)
    }

    divide(){
        let num1 = parseInt(prompt("Ingrese el Primer numero"))
        let num2 = parseInt(prompt("Ingrese el segundo numero"))
        document.write(num1 / num2)
    }

    power(){
        let num1 = parseInt(prompt("Ingrese la base"))
        let num2 = parseInt(prompt("Ingrese el exponente"))
        let result = num1
        for(let i = 1; i < num2;i++){
            result = result*num1
        }
        document.write(result)
    }

    squareRoot(){
        let num1 = parseInt(prompt("Ingrese el numero para buscarle la raiz cuadrada"))
        document.write(Math.sqrt(num1))
    }

    cubeRoot(){
        let num1 = parseInt(prompt("Ingrese el numero para buscarle la raiz cubica"))
        document.write(Math.cbrt(num1))
    }

}

let calculator = new Calculator()
calculator.cubeRoot3()