/**
B) Cofla vuelve de la comisaría exhausto y por lo cansado que estaba se fue a dormir...
Al otro día comienzan las clases del ciclo básico de la universidad (porque cofla quiere ser programador y se inscribió en la facultad de ingeniería para estudiar desarrollo de software).
En su curso en total son 19 alumnos, pero surgió un problema que complicó un poco a la facultad:
se rompió el sistema de registro de asistencias y durante los próximos 30 días no se podrán hacer registros de datos de ningún tipo, por ende las clases no podrán comenzar hasta que esto este solucionado.

Crear mini-sistema que nos permita registrar los alumnos que están presentes (P) y ausentes (A) en clase.
Pasados los 30 días mostrar la situación final de todos los alumnos (Nro total de presentes y ausentes).
Se puede tener un máximo de 10% de ausencias por semestre, si se tienen más aclarar que está reprobado.
*/

function registerStudents(){
    let totalStudents = parseInt(prompt("Cual es la cantidad de alumnos?"))
    let studentList = []

    for(let i= 0; i < totalStudents;i++){
        let studentName = prompt("Cual es el Nombre del studiante? ")
        studentList.push([studentName,0,0])
    }

    for(let i=1; i < 31; i++){
        for(student in studentList){
            let attendance = prompt(`El estudiante ${studentList[student][0]} asistio el dia ${i}?`)
            if(attendance.toLocaleLowerCase() == 'p'){
                studentList[student][1] += 1

            }else{
                studentList[student][2] += 1
            }
        }
    }
    return studentList
}

let students = registerStudents()
for(let i = 0; i < students.length; i++){
    document.write(
        `
         Alumno: ${students[i][0]} <br>
         Asistencia: ${students[i][1]} <br>
         Ausencias: ${students[i][2]} <br>
        `
    )
    if(students[i][2] >= 3){
        document.write(`<b style='color:red'>Reprobado por insistencia</b>`)
    }
    document.write(`<br><br>`)
}