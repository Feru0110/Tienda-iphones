

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {

        const producto = button.parentNode.querySelector('h2').textContent;
        const precio = button.parentNode.querySelector('.price').textContent;
        alert(`Producto agregado al carrito: ${producto} - ${precio}`);


        window.location.href = 'carrito.html';
    });
});