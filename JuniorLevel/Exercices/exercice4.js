/**
 * La facultad de cofla está por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los alumnos que se anotaron en dichas clases, pero necesitamos ver esto más ordenadamente.

CREAR SOLUCIONES:

- Crear una función que al pasarle como parámetro la materia nos devuelva:
  * profesor asignado
  * el nombre de todos los alumnos

- Crear función que nos diga en cuántas clases está cofla.
- Nombrar las clases en las que está y los profesores de cada una.

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
    quimicas: {
        teacher: "Maria Montes",
        students: ["Maria","Ashley","Cofla","Petro","Pedro","Cofla","Danna"]
    },
    calculoIntegral: {
        teacher: "Juana Sanchez",
        students: ["Maria","Ashley","Cofla","Petro","Pedro","Juan","Jose","Marta","Danna","Juanita"]
    },
}


function information(subject){
    if(Object.keys(subjects).includes(subject)){
        console.log(subjects[subject])
    }
}

function coflaClasses(){
    Object.entries(subjects).forEach(([key,value]) => {
        if(value['students'].includes("Cofla")){
            console.log(`
            Materia Donde Cofla esta:
            ${key}
            Profesor: ${value['teacher']}
            `)
        }
    })
}
coflaClasses()
