function ejercicio1() {
  let edadActual = 20;
  let edadMaxima = 85;
  let snackFavorito = "papas fritas";
  let snacksPorDia = 2;
  let snacksRestantes = (edadMaxima - edadActual) * 365 * snacksPorDia;
  alert("Necesitarás " + snacksRestantes + " de " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");
  let precioPorUnidad = 1500;
  let gastoTotal = snacksRestantes * precioPorUnidad;
  console.log("Vas a gastar $" + gastoTotal + " en " + snackFavorito + " a lo largo de tu vida.");
  alert("Vas a gastar $" + gastoTotal + " en " + snackFavorito + " a lo largo de tu vida.");
}

function ejercicio2() {
  let diasDeViaje = 10;
  let presupuestoMaximo = 600000;
  let comidasTotales = 30;
  let dineroPorComida = presupuestoMaximo / comidasTotales;
  alert("Podés gastar " + dineroPorComida + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");
}
