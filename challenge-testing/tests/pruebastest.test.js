const CarritoCompra = require("../index");

describe('CarritoCompra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra();
  });

  it ('CarritoCompra debe ser una clase', () => {
    expect(typeof CarritoCompra.prototype.constructor).toBe('function');
  });

  it ('carrito deberia ser una instancia de la clase CarritoCompra', ()=> {
    expect(carrito instanceof CarritoCompra).toBe(true);
  });

  it ('agregarProducto agrega un producto al carrito', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
    expect(carrito.productos.length).toBe(1);
  });

  it ('calcularTotal devuelve el total de la compra', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
    carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
    expect(carrito.calcularTotal()).toBe(30);
  });

  it ('aplicarDescuento aplica un descuento al total de la compra', () => {
    carrito.agregarProducto({ nombre: 'Producto 1', precio: 10 });
    carrito.agregarProducto({ nombre: 'Producto 2', precio: 20 });
    expect(carrito.aplicarDescuento(10)).toBe(27); 
  });
});
