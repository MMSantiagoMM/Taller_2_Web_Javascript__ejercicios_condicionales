/*Realice una factura de venta, ingrese el valor de 3 productos y calcule lo siguiente:
si paga en efectivo paga el valor total.
si paga con cupón realice un 3% de descuento
si paga a crédito aumente el 5% al total. */

let Texto = document.getElementById("texto");
const Efect = document.getElementById("efect");
const Cupon = document.getElementById("cupon");
const Credit = document.getElementById("credit");

const Total = (descuento) => {
    let Prod_1 = parseFloat(document.getElementById("prod_1").value);
    let Prod_2 = parseFloat(document.getElementById("prod_2").value);
    let Prod_3 = parseFloat(document.getElementById("prod_3").value);
    let total = Prod_1 + Prod_2 + Prod_3;
    Texto.textContent = total;

    if (descuento === "cupon"){
        total -= total * 0.03;
        Texto.textContent = total;
    }else if (descuento === "credito"){
        total -= total * 0.05
        Texto.textContent = total;  
    }
}

Efect.addEventListener("click", () => {
    Total();
})

Cupon.addEventListener("click", () => {
    Total("cupon");
})
Credit.addEventListener("click",()=>{
    Total("credito")
})