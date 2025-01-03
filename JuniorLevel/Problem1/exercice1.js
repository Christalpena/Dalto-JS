/*

A) 3 chicos de 23 años perfectamente normales entran a una heladería a comprar un helado, pero hay un problema: los precios no están al lado de cada estante con su respectivo helado.  
Ellos quieren comprar el helado más caro que puedan con la plata que tienen, así que... veamos cómo podemos ayudarlos.

Roberto tiene $1.5 USD  
Pedro tiene $1.7 USD  
Cofla tiene $3 USD  

Los precios de helados son los siguientes:  
- Palito de helado de agua: $0.6 USD  
- Palito de helado de crema: $1 USD  
- Bombón helado marca heladix: $1.6 USD  
- Bombón helado marca heladovich: $1.7 USD  
- Bombón helado marca helardo: $1.8 USD  
- Potecito de helado con confites: $2.9 USD  
- Pote de 1/4 kg -> $2.9 USD  

**CREAR SOLUCIONES:**  
- Pedirles que ingresen el monto que tienen y mostrarles el helado más caro que pueden comprar.  
- Si hay 2 o más con el mismo precio, mostrar ambos.  
- Cofla quiere saber cuánto es el vuelto.  

---
*/

let money = parseInt(prompt("Ingrese su dinero"))

if(money >= 0.6 && money <= 1){
    document.write("Puedes comprar el helado de agua")
    document.write(`El dinero restante es: ${(money-0.6)}`)

}else if(money >= 1 && money <= 1.6){
    document.write("Puedes comprar el helado de crema")
    document.write(`El dinero restante es: ${money-1}`)

}else if(money >= 1.6 && money <= 1.7){
    document.write("Puedes comprar el helado de heladix")
    document.write(`El dinero restante es: ${money-1.6}`)

}else if(money >= 1.7 && money <= 1.8){
    document.write("Puedes comprar el helado de heladovich")
    document.write(`El dinero restante es: ${money-1.7}`)

}else if(money >= 1.8 && money <= 2.9){
    document.write("Puedes comprar el helado con confites")
    document.write(`El dinero restante es: ${money-1.8}`)

}else if(money >= 2.9){
    document.write("Puedes comprar Pote de 1/4 kg")
    document.write(`El dinero restante es: ${money-2.9}`)
}else{
    document.write("No tienes suficiente dinero")
    document.write(`El dinero restante es: ${money}`)
}




