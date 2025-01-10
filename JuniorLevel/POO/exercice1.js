/**
 *Para comenzar vamos a crear una clase sencillo que 
 *se usa para guardar información sobre las calificaciones 
 *de un alumno. El curso contiene tres materias: Ingles, programación y 
 *HTML, y la clase contendrá el nombre del alumno y la calificación 
 *en cada una de ellas. El script imprimirá el nombre y las calificaciones, asi como la media de sus calificaciones 
 */

class StudentGrades{
    constructor(name,englishGrade,proGrade,htmlGrade){
        this.name = name
        this.englishGrade = englishGrade
        this.proGrade = proGrade
        this.htmlGrade = htmlGrade
    }
    gradesInf(){
        document.write(`
            Name: ${this.name} <br>
            English: ${this.englishGrade} <br>
            Programming: ${this.proGrade} <br>
            HTML: ${this.htmlGrade} <br>
            La media de la calificacion es: ${(this.englishGrade + this.proGrade + this.htmlGrade)/3}
            `)
    }

}

const student1 = new StudentGrades('Juan',8,10,9)
student1.gradesInf()


