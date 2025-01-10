/**
Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaron la atención 3 teléfonos específicamente,
El problema es que ningún vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro:
él antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahí
entramos nosotros.

CREAR SOLUCIONES

- Crear un sistema para mostrarle a Cofla las particularidades de los 3 celulares.
- Cada celular debe tener color, peso, resolución de pantalla, resolución de cámara y memoria ram
- Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar

 */

class Phone{
    constructor(mark,color,weight,screenResolution,cameraResolution,memoryRam){
        this.mark = mark
        this.color = color
        this.weight = weight
        this.screenResolution = screenResolution
        this.cameraResolution = cameraResolution
        this.memoryRam = memoryRam
        this.phoneOn = false
        document.write(`
            ${this.mark}<br>
            ${this.color}<br>
            ${this.weight}<br>
            ${this.screenResolution}<br>
            ${this.cameraResolution}<br>
            ${this.memoryRam}<br>
            `)
    }

    turnOn(){
        if(this.phoneOn == false){
            alert("The phone is on")
            this.phoneOn = true
        }else{
            alert("The phone is on")
        }
    }

    turnOff(){
        if(this.phoneOn == true){
            alert("The phone is off")
            this.phoneOn = false
        }else{
            alert("The phone is off")
        }    
    }

    reStart(){
        if(this.phoneOn == true){
            alert("Restarting the phone")
            this.phoneOn = true
        }else{
            alert("The phone is off")
        }
    }

    takePhoto(){
        if(this.phoneOn == true){
            alert("Photo taken")
        }else{
            alert("The phone is off, you can't take the photo")
        }
    }
    record(){
        if(this.phoneOn == true){
            alert("Video recorded")
        }else{
            alert("The phone is off, you can't record the video")
        }
    }
}

const samsung = new Phone('Samsung',"White","5'",1820,"4K","8G")
samsung.turnOff()
samsung.takePhoto()
