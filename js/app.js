
document.addEventListener("DOMContentLoaded", () => {
  const tabla = document.getElementById("tabla-insumos");
  const insumo = JSON.parse(localStorage.getItem("insumo"));
  if (insumo && tabla) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${insumo.nombre}</td>
      <td>${insumo.cantidad}</td>
      <td>${insumo.unidad}</td>
      <td><button onclick="eliminarInsumo()">❌</button></td>
    `;
    tabla.appendChild(row);
  }
});

function eliminarInsumo() {
  localStorage.removeItem("insumo");
  location.reload();
}
