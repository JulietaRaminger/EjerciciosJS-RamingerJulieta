const productos = [
    { id: 1, nombre: "Angelitos", precio: 50, stock: 10 },
    { id: 2, nombre: "Almohadones", precio: 100, stock: 8 },
    { id: 3, nombre: "Baberos", precio: 80, stock: 15 },
    { id: 4, nombre: "Borlas", precio: 100, stock: 5 },
  ];
  
  class CarritoDeCompras {
    constructor() {
      this.productos = [];
    }
  
    mostrarProductosDisponibles() {
      alert("Productos disponibles:");
      productos.forEach((producto) => {
        alert(
          `ID: ${producto.id} - ${producto.nombre} - Precio: $${producto.precio} - Stock: ${producto.stock}`
        );
      });
    }
  
    agregarProducto(producto, cantidad) {
      const productoEnStock = productos.find((p) => p.id === producto.id);
  
      if (!productoEnStock) {
        alert("Producto no disponible en el stock.");
        return;
      }
  
      if (cantidad > productoEnStock.stock) {
        alert("No hay suficiente stock disponible.");
        return;
      }
  
      const productoAgregado = {
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidad,
      };
  
      this.productos.push(productoAgregado);
      productoEnStock.stock -= cantidad;
  
      alert(`Se ha agregado ${cantidad} ${producto.nombre}(s) al carrito.`);
    }
  
    mostrarProductos() {
      alert("Productos en el carrito:");
      this.productos.forEach((producto) => {
        alert(
          `ID: ${producto.id} - ${producto.nombre} - Precio: $${producto.precio} - Cantidad: ${producto.cantidad} `
        );
      });
    }
  
    calcularTotal() {
      return this.productos.reduce(
        (total, producto) => total + producto.precio * producto.cantidad,
        0
      );
    }
  
    realizarCompra() {
      this.mostrarProductosDisponibles();
  
      let continuarComprando = true;
  
      while (continuarComprando) {
        const idProducto = parseInt(
          prompt("Ingrese el ID del producto que desea comprar:")
        );
        const productoSeleccionado = productos.find((p) => p.id === idProducto);
  
        if (!productoSeleccionado) {
          alert("Producto no encontrado.");
        } else {
          const cantidadProducto = parseInt(
            prompt(
              `Ingrese la cantidad de ${productoSeleccionado.nombre} que desea comprar:`
            )
          );
          this.agregarProducto(productoSeleccionado, cantidadProducto);
        }
  
        this.mostrarProductos();
  
        const respuesta = prompt(
          "¿Desea seguir comprando? (si/no)"
        ).toLowerCase().includes;
        continuarComprando = respuesta === "si";
      }
  
      if (this.productos.length > 0) {
        alert("Detalle de la compra:");
        this.mostrarProductos();
  
        const totalCompra = this.calcularTotal();
        alert(`El total de la compra es: $${totalCompra.toFixed(2)}`);
        alert("¡Gracias por tu compra!");
      } else {
        alert("No se realizaron compras.");
      }
    }
  }
  
  const carrito = new CarritoDeCompras();
  carrito.realizarCompra();
  