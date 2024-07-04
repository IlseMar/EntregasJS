//SIMULADOR CATÁLOGO DE COMPRA
// Descripción: Simular un catálogo de compras sencillo. El programa debe permitir al usuario agregar artículos al catálogo
//y calcular el costo total de los artículos en el catálogo.

// Artículos
// 1.FUNDAS: marca, diseño
// Marcas (precio base 250)
// - Samsumg + 45
// - Huawei + 55
// - iPhone + 50
// - Xiaomi + 55
// - Motorola + 40
// Diseño
// - Básico + 50
// - Intemedio + 100
// - Super diseño + 150
// 2.ESPEJOS: tamaño, diseño
// Marcas (precio base 200)
// - Chico + 50
// - Mediano +60
// - Grande +70
// Diseño
// - Básico + 50
// - Intemedio + 100
// - Super diseño + 150

// REQUISITOS CODERHAUS. Debe contener:
// Un algoritmo con un condicional.
// Un algoritmo utilizando un ciclo.
// Armar un simulador interactivo, la estructura final de tu proyecto integrador.
// Recuerden que tendrán hasta 7 días para resolver la entrega y subirla.

let producto = prompt("Elige un producto (funda o espejo)");

while (producto !== "funda" && producto !== "espejo") {
  alert(`No manejamos el producto ${producto}`);
  producto = prompt("Elige un producto (funda o espejo)");
}

if (producto === "funda") {
  let marca = (nombreMarca) => {
    while (
      nombreMarca !== "samsung" &&
      nombreMarca !== "huawei" &&
      nombreMarca !== "xiaomi" &&
      nombreMarca !== "iphone" &&
      nombreMarca !== "motorola"
    ) {
      alert(`No manejamos la marca ${nombreMarca}`);
      nombreMarca = prompt(
        "Cuál es el modelo de tu celular (samsung, huawei, xiaomi, iphone o motorola)"
      );
    }
    let precioMarca = 250;
    if (nombreMarca === "samsung") {
      return precioMarca + 45;
    } else if (nombreMarca === "huawei" || nombreMarca === "xiaomi") {
      return precioMarca + 55;
    } else if (nombreMarca === "iphone") {
      return precioMarca + 50;
    } else if (nombreMarca === "motorola") {
      return precioMarca + 40;
    } else {
    }
  };

  let diseñoFunda = (tipoDiseño) => {
    while (
      tipoDiseño !== "basico" &&
      tipoDiseño !== "intermedio" &&
      tipoDiseño !== "super"
    ) {
      alert(`No manejamos el diseño ${tipoDiseño}`);
      tipoDiseño = prompt(
        "Elige tu tipo de diseño (basico, intermedio o super)"
      );
    }
    let precioDiseño = precioModelo;
    if (tipoDiseño === "basico") {
      return precioDiseño + 50;
    } else if (tipoDiseño === "intermedio") {
      return precioDiseño + 100;
    } else if (tipoDiseño === "super") {
      return precioDiseño + 150;
    } else {
    }
  };

  let precioModelo = marca(
    prompt(
      "Cuál es el modelo de tu celular (samsung, huawei, xiaomi, iphone o motorola)"
    )
  );
  alert(`El precio de este modelo es de ${precioModelo} pesos.`);

  let precioSubTotal = diseñoFunda(
    prompt("Elige tu tipo de diseño (basico, intermedio o super)")
  );
  alert(
    `El precio por este modelo y el tipo de diseño es de ${precioSubTotal} pesos.`
  );

  let unidadIngresada = Number(
    prompt("Ingresa el número de unidades que deseas")
  );
  let unidades = () => unidadIngresada * precioSubTotal;
  let precioTotal = unidades();
  alert(`El precio TOTAL de tu funda es de ${precioTotal} pesos`);
} else if (producto === "espejo") {
  let tamaño = (nombreTamaño) => {
    while (
      nombreTamaño !== "chico" &&
      nombreTamaño !== "mediano" &&
      nombreTamaño !== "grande"
    ) {
      alert(`No manejamos el tamaño ${nombreTamaño}`);
      nombreTamaño = prompt(
        "Cuál es el tamaño de tu espejo (chico, mediano o grande)"
      );
    }
    let precioTamaño = 200;
    switch (nombreTamaño) {
      case "chico":
        return precioTamaño + 50;
      case "mediano":
        return precioTamaño + 60;
      case "grande":
        return precioTamaño + 70;
      default:
        return alert((precioTamaño = "Tamaño no existente"));
    }
  };

  let diseñoEspejo = (espejoDiseño) => {
    while (
      espejoDiseño !== "basico" &&
      espejoDiseño !== "intermedio" &&
      espejoDiseño !== "super"
    ) {
      alert(`No manejamos el diseño ${espejoDiseño}`);
      espejoDiseño = prompt(
        "Elige tu tipo de diseño (basico, intermedio o super)"
      );
    }
    let precioDiseñoCel = precioTamaño;
    if (espejoDiseño === "basico") {
      return precioDiseñoCel + 50;
    } else if (espejoDiseño === "intermedio") {
      return precioDiseñoCel + 100;
    } else if (espejoDiseño === "super") {
      return precioDiseñoCel + 150;
    } else {
    }
  };

  let precioTamaño = tamaño(
    prompt("Cuál es el tamaño de tu espejo (chico, mediano o grande)")
  );
  alert(`El precio por este tamaño es de ${precioTamaño} pesos.`);

  let precioSubTotalEspejo = diseñoEspejo(
    prompt("Elige tu tipo de diseño (basico, intermedio o super)")
  );
  alert(
    `El precio por este modelo y el tipo de diseño es de ${precioSubTotalEspejo} pesos.`
  );

  let unidadIngresada = Number(
    prompt("Ingresa el número de unidades que deseas")
  );
  let unidades = () => unidadIngresada * precioSubTotalEspejo;
  let precioTotal = unidades();
  alert(`El precio TOTAL de tu funda es de ${precioTotal} pesos`);
} else {
  alert((producto = "No manejamos ese producto"));
}
