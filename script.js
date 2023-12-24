/* CALCULAR COSTO TOTAL DE LOS PRODUCTOS CON O SIN DESCUENTO.
✅Aplicar el descuento dependiendo de la cantidad.
✅Ingresar la cantidad de productos para comprar.
✅Ingresar nombre del produscto.
✅Ingresar precio del producto.
✅Ingresar la cantidad de ese producto que elegi para comprar.
✅Poner un alert del total y si aplica descuento o no.
✅Mostrar el total de todas las compras.
*/

const calcularCostoTotal = (precio, cantidad) => {
    let costoTotal = precio * cantidad;
  
    if (cantidad >= 10 && cantidad < 20) {
      costoTotal *= 0.9; // 10% de descuento
    } else if (cantidad >= 20 && cantidad < 50) {
      costoTotal *= 0.8; // 20% de descuento
    } else if (cantidad >= 50) {
      costoTotal *= 0.7; // 30% de descuento
    }
  
    return costoTotal;
  };
  
  const solicitarNumero = (mensaje) => {
    let numero;
  
    do {
      numero = parseInt(prompt(mensaje));
  
      if (isNaN(numero) || numero <= 0) {
        alert('Por favor, ingrese un número válido y mayor que cero.');
      }
    } while (isNaN(numero) || numero <= 0);
  
    return numero;
  };
  
  const solicitarDecimal = (mensaje) => {
    let decimal;
  
    do {
      decimal = parseFloat(prompt(mensaje));
  
      if (isNaN(decimal) || decimal <= 0) {
        alert('Por favor, ingrese un número decimal válido y mayor que cero.');
      }
    } while (isNaN(decimal) || decimal <= 0);
  
    return decimal;
  };
  
  const agregarProducto = () => {
    const nombreProducto = prompt('Ingrese el nombre del producto');
    const precioProducto = solicitarDecimal('Ingrese el precio del producto');
    const cantidad = solicitarNumero('Ingrese la cantidad a comprar.');
  
    const costoConDescuento = calcularCostoTotal(precioProducto, cantidad);
  
    if (cantidad < 10) {
      alert('Estos productos no aplican descuento. El total es: $' + costoConDescuento);
    } else {
      alert('El costo total con descuento es de: $' + costoConDescuento);
    }
  
    return costoConDescuento;
  };
  
  const realizarCompra = () => {
    const numProductos = solicitarNumero('Ingrese la cantidad de productos a comprar:');
    let totalCompra = 0;
  
    for (let i = 1; i <= numProductos; i++) {
      totalCompra += agregarProducto();
    }
  
    alert('El total de la compra es: $' + totalCompra);
  };
  
  realizarCompra();
