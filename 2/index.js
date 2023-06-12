/* Pide al usuario dos números y determina cual es el número mayor y cual es el menor. */

let Num_1 = document.getElementById("num_1");
let Num_2 = document.getElementById("num_2");
const Check = document.getElementById ("check");
let Texto = document.getElementById("texto");

Check.addEventListener("click", ()=> {
    let number_1 = Num_1.value;
    let number_2 = Num_2.value;

    number_1 > number_2? Texto.textContent = number_1 + " es mayor " : Texto.textContent = number_2 + " Es mayor"

    Num_1.value = "";
    Num_2.value = "";

})