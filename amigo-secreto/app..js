// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const input = document.getElementById("input-amigo");
const botonAdicionar = document.getElementById("adicionar");
const lista = document.getElementById("lista-amigos");
const botonSortear = document.getElementById("sortear");
const resultado = document.getElementById("resultado");

let nombres = [];

botonAdicionar.addEventListener("click", () => {
  const nombre = input.value.trim();
  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  nombres.push(nombre);
  actualizarLista();
  input.value = "";
});

function actualizarLista() {
  lista.innerHTML = "";
  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

botonSortear.addEventListener("click", () => {
  if (nombres.length === 0) {
    alert("La lista está vacía. Agrega al menos un nombre.");
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const nombreSorteado = nombres[indice];
  resultado.textContent = `🎉 El amigo secreto es: ${nombreSorteado} 🎉`;
});
