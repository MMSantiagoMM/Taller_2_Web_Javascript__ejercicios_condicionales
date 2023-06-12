let Texto = document.getElementById("texto");
const Calc = document.getElementById("calcular");

Calc.addEventListener("click", () => {
  let age = document.getElementById("age").value;
  let fechaActual = new Date();

  let fechaNacimiento = new Date(fechaActual.getFullYear() - age, fechaActual.getMonth(), fechaActual.getDate());

  console.log("Fecha de nacimiento:", fechaNacimiento);
});

