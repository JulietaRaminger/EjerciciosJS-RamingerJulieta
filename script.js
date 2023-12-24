/* CALCULAR COSTO TOTAL DE LOS PRODUCTOS CON O SIN DESCUENTO.
✅Aplicar el descuento dependiendo de la cantidad.
✅Ingresar la cantidad de productos para comprar.
✅Ingresar nombre del produscto.
✅Ingresar precio del producto.
✅Ingresar la cantidad de ese producto que elegi para comprar.
✅Poner un alert del total y si aplica descuento o no.
✅Mostrar el total de todas las compras.
*/

let costoTotal;
let numProductos;
let nombreProducto;
let precioProducto;
let cantidad;
let costoConDescuento;
let totalCompra = 0;

function calcularCostoTotal(precioProducto, cantidad) {
  costoTotal = precioProducto * cantidad;

  if (cantidad >= 10 && cantidad < 20) {
    costoTotal *= 0.9; // 10% de descuento
  } else if (cantidad >= 20 && cantidad < 50) {
    costoTotal *= 0.8; // 20% de descuento
  } else if (cantidad >= 50) {
    costoTotal *= 0.7; // 30% de descuento
  }

  return costoTotal;
}

numProductos = parseInt(prompt("Ingrese la cantidad de productos a comprar:"));

for (let i = 1; i <= numProductos; i++) {
  nombreProducto = prompt("Ingrese el nombre del producto");

  do {
    precioProducto = parseFloat(prompt("Ingrese el precio del producto"));

    if (isNaN(precioProducto) || precioProducto <= 0) {
      alert("Por favor, ingrese un precio válido y mayor que cero.");
    }
  } while (isNaN(precioProducto) || precioProducto <= 0);

  do {
    cantidad = parseInt(prompt("Ingrese la cantidad a comprar."));

    if (isNaN(cantidad) || cantidad <= 0) {
      alert("Por favor, ingrese una cantidad válida y mayor que cero.");
    }
  } while (isNaN(cantidad) || cantidad <= 0);

  costoConDescuento = calcularCostoTotal(precioProducto, cantidad);

  if (cantidad < 10) {
    alert(
      "Estos productos no aplican descuento. El total es: $" +
        costoConDescuento.toFixed(2)
    );
  } else {
    alert(
      "El costo total con descuento es de: $" + costoConDescuento.toFixed(2)
    );
  }

  totalCompra += costoConDescuento;
}

alert("El total de la compra es: $" + totalCompra.toFixed(2));
