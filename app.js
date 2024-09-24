document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Producto agregado al carrito');
    });
});