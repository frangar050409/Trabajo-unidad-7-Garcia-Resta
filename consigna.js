function leer(id) {
  return document.getElementById(id).value;
}

function ejercicio1() {
  let edadActual = Number(leer("edadActual"));
  let edadMaxima = Number(leer("edadMaxima"));
  let snackFavorito = leer("snackFavorito").trim() || "snacks";
  let snacksPorDia = Number(leer("snacksPorDia"));
  let snacksRestantes = Math.round(Math.max(edadMaxima - edadActual, 0) * 365 * snacksPorDia);
  alert("Necesitarás " + snacksRestantes + " de " + snackFavorito + " para que te alcancen hasta los " + edadMaxima + " años.");
  let precioPorUnidad = Number(leer("precioPorUnidad"));
  let gastoTotal = snacksRestantes * precioPorUnidad;
  console.log("Vas a gastar $" + gastoTotal + " en " + snackFavorito + " a lo largo de tu vida.");
  alert("Vas a gastar $" + gastoTotal + " en " + snackFavorito + " a lo largo de tu vida.");
}

function ejercicio2() {
  let diasDeViaje = Number(leer("diasDeViaje"));
  let presupuestoMaximo = Number(leer("presupuestoMaximo"));
  let comidasTotales = Number(leer("comidasTotales"));
  let dineroPorComida = comidasTotales > 0 ? Math.round(presupuestoMaximo / comidasTotales) : 0;
  alert("Podés gastar " + dineroPorComida + " en cada comida para que te alcance la plata durante los " + diasDeViaje + " días de viaje.");
}
