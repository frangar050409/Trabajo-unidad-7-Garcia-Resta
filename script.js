const pesos = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });
const numero = new Intl.NumberFormat("es-AR", { maximumFractionDigits: 0 });

function valor(id) {
  return Number(document.getElementById(id).value) || 0;
}

function contar(elemento, destino, formato) {
  const inicio = Number(elemento.dataset.valor || 0);
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elemento.dataset.valor = destino;
    elemento.textContent = formato(destino);
    return;
  }
  const duracion = 900;
  const comienzo = performance.now();
  elemento.dataset.valor = destino;
  function paso(ahora) {
    const progreso = Math.min((ahora - comienzo) / duracion, 1);
    const suave = 1 - Math.pow(1 - progreso, 3);
    elemento.textContent = formato(inicio + (destino - inicio) * suave);
    if (progreso < 1) requestAnimationFrame(paso);
  }
  requestAnimationFrame(paso);
}

function calcularSnacks() {
  const edadActual = valor("edadActual");
  const edadMaxima = valor("edadMaxima");
  const snackFavorito = document.getElementById("snackFavorito").value.trim() || "snacks";
  const snacksPorDia = valor("snacksPorDia");
  const precioPorUnidad = valor("precioPorUnidad");
  const anios = Math.max(edadMaxima - edadActual, 0);
  const snacksRestantes = Math.round(anios * 365 * snacksPorDia);
  const gastoTotal = snacksRestantes * precioPorUnidad;

  contar(document.getElementById("cantidadFinal"), snacksRestantes, (n) => numero.format(n));
  contar(document.getElementById("gastoTotal"), gastoTotal, (n) => pesos.format(n));
  document.getElementById("nombreSnack").textContent = snackFavorito;
  document.getElementById("fraseSnacks").textContent =
    `Necesitarás ${numero.format(snacksRestantes)} de ${snackFavorito} para que te alcancen hasta los ${edadMaxima} años.`;

  const vivido = edadMaxima > 0 ? Math.min(edadActual / edadMaxima, 1) * 100 : 0;
  document.getElementById("barraVida").style.width = `${vivido}%`;
  document.getElementById("textoBarra").textContent = `Ya recorriste el ${vivido.toFixed(0)}% del camino: te quedan ${anios} años de ${snackFavorito}.`;
}

function calcularViaje() {
  const diasDeViaje = valor("diasDeViaje");
  const presupuestoMaximo = valor("presupuestoMaximo");
  const comidasTotales = valor("comidasTotales");
  const dineroPorComida = comidasTotales > 0 ? presupuestoMaximo / comidasTotales : 0;

  document.getElementById("tDias").textContent = diasDeViaje;
  document.getElementById("tPresupuesto").textContent = pesos.format(presupuestoMaximo);
  document.getElementById("tComidas").textContent = comidasTotales;
  contar(document.getElementById("tPorComida"), dineroPorComida, (n) => pesos.format(n));
  document.getElementById("fraseViaje").textContent =
    `Podés gastar ${pesos.format(dineroPorComida)} en cada comida para que te alcance la plata durante los ${diasDeViaje} días de viaje.`;

  const ticket = document.getElementById("ticket");
  ticket.classList.remove("imprimir");
  void ticket.offsetWidth;
  ticket.classList.add("imprimir");
}

function crearLluvia() {
  const lluvia = document.querySelector(".lluvia");
  const emojis = ["🍟", "🍿", "🍫", "🥨", "🍪", "🌮", "✈️"];
  for (let i = 0; i < 22; i++) {
    const gota = document.createElement("span");
    gota.textContent = emojis[i % emojis.length];
    gota.style.left = `${Math.random() * 100}%`;
    gota.style.animationDuration = `${8 + Math.random() * 10}s`;
    gota.style.animationDelay = `${-Math.random() * 18}s`;
    gota.style.fontSize = `${1 + Math.random() * 1.6}rem`;
    lluvia.appendChild(gota);
  }
}

document.getElementById("formSnacks").addEventListener("input", calcularSnacks);
document.getElementById("formViaje").addEventListener("input", calcularViaje);
document.getElementById("alertSnacks").addEventListener("click", ejercicio1);
document.getElementById("alertViaje").addEventListener("click", ejercicio2);

crearLluvia();
calcularSnacks();
calcularViaje();
