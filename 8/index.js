

let Texto = document.getElementById("texto");
let Check = document.getElementById("check");

Check.addEventListener("click", () => {
    let Pac = document.getElementById("paciente").value;
    let Days = parseInt(document.getElementById("days").value);
    let Age = parseInt(document.getElementById("age").value);
    let veinte = 20000;
    let treinta = 30000;
    let veinticinco = 25000;
    let quice = 15000;
    let total = " ";
    let sobrecargo = "";
    if (Age <= 10) {
        if (Days <= 1) {
            total = Days * veinte;
            Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${veinte} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total}`
        } else if (Days <= 4) {
            total = Days * treinta;
            Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${treinta} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total}`
        } else if (Days <= 7) {
            total = Days * veinticinco;
            sobrecargo = total * 0.05;
            Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${veinticinco} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total - sobrecargo}`
        } else {
            total = Days * quice;
            sobrecargo = total * 0.10;
            Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${quice} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total - sobrecargo}`

        }
    } else {
        if (Age < 18) {
            if (Days <= 1) {
                total = Days * veinte;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${veinte} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total}`
            } else if (Days <= 4) {
                total = Days * treinta;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${treinta} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total}`
            } else if (Days <= 7) {
                total = Days * veinticinco;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${veinticinco} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total - sobrecargo}`
            } else {
                total = Days * quice;
                sobrecargo = total * 0.10;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${quice} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total - sobrecargo}`
            }

        } else if (Age < 49) {
            if (Days <= 1) {
                total = Days * veinte;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${veinte} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total}`
            } else if (Days <= 4) {
                total = Days * treinta;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${treinta} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total}`
            } else if (Days <= 7) {
                total = Days * veinticinco;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${veinticinco} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total - sobrecargo}`
            } else {
                total = Days * quice;
                sobrecargo = total * 0.15;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${quice} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total - sobrecargo}`
            }
        } else {
            if (Days <= 1) {
                total = Days * veinte;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${veinte} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total}`
            } else if (Days <= 4) {
                total = Days * treinta;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${treinta} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total}`
            } else if (Days <= 7) {
                total = Days * veinticinco;
                sobrecargo = total * 0.15;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${veinticinco} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total - sobrecargo}`
            } else {
                total = Days * quice;
                sobrecargo = total * 0.20;
                Texto.innerHTML = `el nombre del paciente es: ${Pac} <br> Su edad es ${Age} <br> los días de hospitalización son ${Days} <br>El costo por día es de ${quice} <br>El sobrecargo es de: ${sobrecargo} <br>el total a pagar es de: ${total - sobrecargo}`
            }


        }
    }
}

)
