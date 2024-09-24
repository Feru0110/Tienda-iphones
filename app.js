const productos = [
    { id: 1, nombre: "iPhone 14", precio: 799, imagen: "https://m-cdn.phonearena.com/images/phones/82526-940/Apple-iPhone-14.jpg" },
    { id: 2, nombre: "iPhone 13", precio: 699, imagen: "iphone13.jpg" },
    { id: 3, nombre: "iPhone 12", precio: 599, imagen: "iphone12.jpg" },
    { id: 4, nombre: "iPhone 11", precio: 399, imagen: "iphone11.jpg" },
  
];

const productList = document.getElementById('product-list');

productos.forEach(producto => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');
    
    productDiv.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
    `;
    
    productList.appendChild(productDiv);
});

function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`${producto.nombre} añadido al carrito.`);
}
