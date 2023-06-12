/* Pide al usuario un número y determina si es par o impar y si es positivo o negativo. */

let Check = document.getElementById("check");
let Numer = document.getElementById("num");
let Texto = document.getElementById("text");
Check.addEventListener("click", () => {
    let Num = Numer.value
    if (Num % 2 === 0 && Num > 0)
        Texto.textContent = Num + " Es par y es positivo"
    else if (Num % 2 === 0 && Num < 0)
        Texto.textContent = Num + " Es par y es negativo"
    else if (Num % 2 !== 0 && Num > 0)
        Texto.textContent = Num + " Es impar y es positivo"
    else
        Texto.textContent = Num + " Es impar y es negativo"

    Numer.value = " "
})

