let Texto = document.getElementById("texto");

const Check = document.getElementById("check").addEventListener("click", () => {

    let Num = parseInt(document.getElementById("numero").value);
    switch (Num) {
        case 1:
            Texto.textContent = "Lunes"
            break;
        case 2:
            Texto.textContent = "Martes"
            break;
        case 3:
            Texto.textContent = "Miércoles"
            break;
        case 4:
            Texto.textContent = "Jueves"
            break;
        case 5:
            Texto.textContent = "Viernes"
            break;
        case 6:
            Texto.textContent = "Sábado"
            break;
        case 7:
            Texto.textContent = "Domingo"
            break;
        default: Texto.textContent = "Número inválido"
            break;
    }

})