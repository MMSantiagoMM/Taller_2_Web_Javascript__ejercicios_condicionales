/* Se necesita clasificar la etapa de una persona solo pidiéndole como dato su edad. (Si la edad es menor de 18 es adolente), (si la edad está en el rango de 18 a 28 es adulto adolecente), (si la edad está entre 29 a 49 es adulto), (si la edad está entre 50 en adelante es adulto mayor).  */
let Age = document.getElementById("age");
let Texto = document.getElementById("texto");

const Send = document.getElementById("send").addEventListener("click", () => {

    let age = Age.value;
    if (age < 18)
        Texto.textContent = "Usted es adolescente "
    else if (age < 28)
        Texto.textContent = "Usted es adulto-adolescente"
    else if (age < 49)
        Texto.textContent = "Usted es un adulto"
    else
        Texto.textContent =     "Usted es un adulto mayor"


}) 