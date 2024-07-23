let carritoDeCompras = [];
let total = 0;

//Funciones de cálculo: calcularCostoFunda y
//calcularCostoEspejo calculan el costo total basado
//en las selecciones.

function calcularCostoFunda(modelo, diseño, unidades) {
  const precioBase = 250;
  let costoModelo = 0;
  let costoDiseño = 0;
  switch (modelo) {
    case "samsung":
      costoModelo = 45;
      break;
    case "huawei":
      costoModelo = 55;
      break;
    case "xiaomi":
      costoModelo = 55;
      break;
    case "iphone":
      costoModelo = 50;
      break;
    case "motorola":
      costoModelo = 40;
      break;
  }

  switch (diseño) {
    case "basico":
      costoDiseño = 50;
      break;
    case "intermedio":
      costoDiseño = 100;
      break;
    case "super":
      costoDiseño = 150;
      break;
  }
  return (precioBase + costoDiseño + costoModelo) * unidades;
}

function calcularCostoEspejo(tamaño, diseño, unidades) {
  const precioBase = 200;
  let costoTamaño = 0;
  let costoDiseño = 0;

  switch (tamaño) {
    case "chico":
      costoTamaño = 50;
      break;
    case "mediano":
      costoTamaño = 60;
      break;
    case "grande":
      costoTamaño = 70;
      break;
  }

  switch (diseño) {
    case "basico":
      costoDiseño = 50;
      break;
    case "intermedio":
      costoDiseño = 100;
      break;
    case "super":
      costoDiseño = 150;
      break;
  }

  return (precioBase + costoTamaño + costoDiseño) * unidades;
}

//Funciones de agregar al carrito: agregarFunda y
//agregarEspejo capturan las selecciones del usuario,
//calculan el costo y actualizan el carrito.

function agregarFunda() {
  let modelo = document.getElementById("modelo-celular").value;
  let diseño = document.getElementById("diseño-funda").value;
  let unidades = Number(document.getElementById("unidades-funda").value);

  let costo = calcularCostoFunda(modelo, diseño, unidades);

  let funda = {
    producto: "funda",
    modelo: modelo,
    diseño: diseño,
    unidades: unidades,
    costo: costo,
  };

  carritoDeCompras.push(funda);
  total += costo;
  actualizarCarrito();
}

function agregarEspejo() {
  let tamaño = document.getElementById("tamaño-espejo").value;
  let diseño = document.getElementById("diseño-espejo").value;
  let unidades = Number(document.getElementById("unidades-espejo").value);

  let costo = calcularCostoEspejo(tamaño, diseño, unidades);

  let espejo = {
    producto: "espejo",
    tamaño: tamaño,
    diseño: diseño,
    unidades: unidades,
    costo: costo,
  };

  carritoDeCompras.push(espejo);
  total += costo;
  actualizarCarrito();
}

document
  .getElementById("agregar-funda")
  .addEventListener("click", agregarFunda);
document
  .getElementById("agregar-espejo")
  .addEventListener("click", agregarEspejo);

//Actualizar la vista del carrito: actualizarCarrito muestra
//los elementos agregados y el costo total en la página.

function actualizarCarrito() {
  let carritoElement = document.getElementById("carrito");
  carritoElement.innerHTML = "";

  carritoDeCompras.forEach((item) => {
    let itemElement = document.createElement("li");
    if (item.producto === "funda") {
      itemElement.innerHTML = `<p>Funda - 
      Modelo: ${item.modelo}, 
      Diseño: ${item.diseño}, 
      Unidades: ${item.unidades}, 
      Costo: ${item.costo} MXN</p> 
      <button class="delete-button">Borrar</button>`;
    } else if (item.producto === "espejo") {
      itemElement.innerHTML = `<p>Espejo - 
      Tamaño: ${item.tamaño},
       Diseño: ${item.diseño}, 
       Unidades: ${item.unidades}, 
       Costo: ${item.costo} MXN</p> 
       <button class="delete-button">Borrar</button>`;
    }
    let botonBorrar = itemElement.querySelector(".delete-button");
    botonBorrar.addEventListener("click", () => {
      borrar(item);
    });
    carritoElement.appendChild(itemElement);
  });

  document.getElementById("total").textContent = total;
}

const borrar = (item) => {
  carritoDeCompras = carritoDeCompras.filter(
    (itemElement) => itemElement.producto !== item.producto
  );
  actualizarCarrito();
  total = 0;
};
