/**
---
A) Un joven muy afortunado logró ganar el primer premio de la lotería... exacto, estamos hablando del pobre al que cofla le dió una mano, este pobre decide hacer una fiesta para festejar que salió de la pobreza con este millonario compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas...

- Dejar pasar solo a los mayores de edad
- La primer persona que entre después de las 2 PM, no paga.
---
*/

let free = true
function canPass(time){
    let age = parseInt(prompt("Cual es tu edad?"))
    if(age >= 18){
        if(time > 2 && free == true){
            free = false
            return ("Puedes pasar gratis")
        }else{
            return ("Puedes pasar pero debes pagar.")
        }
    }else{
        return "Perdon, pero no eres mayor de edad."
    }
    

}

alert(canPass(3))
alert(canPass(3))

