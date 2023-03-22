let arreglo = ["pequeño", "unPocomasGrande", "muchisimoMasGrande"];
let frase = "evaluar";

function parametros(frase, arreglo) {
  let longitudAEvaluar = frase.length;
  let nuevoArreglo = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (longitudAEvaluar < arreglo[i].length) {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
}

console.log(parametros(frase, arreglo));

//El ejercicio no fue llevado a su termino debido al tiempo de desarrollo de la actividad, posibles causas, mala planificacion por falta de los participantes y una mala gestion, falta de informacion del desarrollo de la actividad, posible confusion de los ejercicios, el conocimiento sobre las actividades a desarrollar existia pero su aplicacion practica es lenta debido a que no se ejercita con ejercicios de manera regular.
