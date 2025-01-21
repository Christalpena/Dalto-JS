/**
** Cofla ya vio las 12 materias y se decidió en cual se va a inscribir así que en tres días lo hará, el problema es que se rompió el sistema de inscripciones.

**CREAR SOLUCIONES:**

- Crear una función para preguntarle a Cofla en qué materia se quiere inscribir.
- Si ya hay 20 alumnos anotados en la materia negarle la inscripción.
- Si hay menos de 20 alumnos inscribir a Cofla y añadirlo a la lista de alumnos.
 */

let subjects = {
    fisica: {
        teacher: "Juan Pablo Barreras",
        students : ["Maria","Petro","Cofla","Danna"]
    },
    programacion: {
        teacher: "Tomasina Vera",
        students: ["Maria","Petro","Danna","Ramon","Adams"]
    },
    sociales: {
        teacher: "Francisco Gimenez",
        students: ["Maria","Ashley","Cofla","Petro","Pedro","Juan","Jose","Marta","Cofla","Danna"]
    },
    lenguas: {
        teacher: "Juan Velazco",
        students: ["Sofia","Ashley","Petro","Pedro","Juan","Jose","Marta","Ana"]
    },
    quimica: {
        teacher: "Maria Montes",
        students: ["Maria","Ashley","Cofla","Petro","Pedro","Cofla","Danna"]
    },
    calculoIntegral: {
        teacher: "Juana Sanchez",
        students: ["Maria","Ashley","Cofla","Petro","Pedro","Juan","Jose","Marta","Danna","Juanita,Maria","Ashley","Cofla","Petro","Pedro","Juan","Jose","Marta","Danna","Juanita"]
    },
}

function inscriptions(){
    let response = prompt(`
        En cual materia te quieres inscribir?
        ${Object.keys(subjects)}  
        `)

    for(const [key,value] of Object.entries(subjects) ){
        if(key == response){
            if(value['students'].length < 19){
                return(`Te has inscrito en la materia de ${response}`)
                
            }else{
                return(`Ya no hay cupos para la materia de ${response}`)
            }
        }else if(!Object.keys(subjects).includes(response)){
            return("Esta materia no esta disponible")
        }
    }
    
}

document.write(inscriptions())