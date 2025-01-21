/**
 * a) Terminó el primer semestre y Cofla no sabe aprobará o no las materias, para lograrlo necesitará:
   Contar con al menos el 90% de asistencia.
   El promedio por materia debe ser de al menos 7 / 10.
   Debe tener al menos del 75% de los trabajos prácticos entregados.

   - Solicitar los datos y decirle si aprueba o no.
   - Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
   - Todo esto estructurado como tabla

 */

let subjects = {
    Math: {
        attendance: 70,
        subjectAvrg: 6,
        works: 70
    },
    Physics: {
        attendance: 60,
        subjectAvrg: 5,
        works: 70
    },
    Lenguages: {
        attendance: 90,
        subjectAvrg: 9,
        works: 80
    }
}
function approved(subjects){
    console.table(subjects)
    for(const [key,value] of Object.entries(subjects)){
        if(value['attendance'] >= 90 && value['subjectAvrg'] >= 7 && value['works'] >=75){
            console.log(`Has aprovado la materia de ${key}`)
        }else{
            console.error(`No has aprovado la materia de ${key}`)
        }
    }

}

approved(subjects)


