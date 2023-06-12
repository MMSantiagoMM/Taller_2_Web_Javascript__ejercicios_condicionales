/*     6.  Se pide ingresar 3 notas y calcular el promedio de un alumno, mostrar el nivel del alumnos según su promedio: 
*  menos 2,0 = Malo
*  menos 2,9 = Debe recuperar
* entre 3 – 3,9 = Regular.
* entre 4 – 4,4 = Bueno.
* entre 4,5 – 5 = Muy bueno. */
let Return = document.getElementById("resultado");
const Calc = document.getElementById("calc");

Calc.addEventListener("click", () => {
    let Not_1 = parseFloat(document.getElementById("not_1").value);
    let Not_2 = parseFloat(document.getElementById("not_2").value);
    let Not_3 = parseFloat(document.getElementById("not_3").value);
    let Total = (Not_1 + Not_2 + Not_3) / 3;
    if (Total < 2) {
        Return.textContent = "El estudiante es malo porque su promedio es de: " + Total.toFixed(2)
    }

    else if (Total <= 2.9){
        Return.textContent = "El estudiante debe resuperar porque su promedio es de: " + Total.toFixed(2)
    }
    else if (Total <= 3.9){
        Return.textContent = "El estudiante es regular porque su promedio es de: " + Total.toFixed(2)
    } else if (Total <= 4.4) {
        Return.textContent = "El estudiante es bueno porque su promedio es de: " + Total.toFixed(2)
    } else {
        Return.textContent = "El estudiante es muy bueno porque su promedio es de: " + Total.toFixed(2)
    }


})