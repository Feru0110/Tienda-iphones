

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {

        const producto = button.parentNode.querySelector('h2').textContent;
        const precio = button.parentNode.querySelector('.price').textContent;
        alert(`Producto agregado al carrito: ${producto} - ${precio}`);


        window.location.href = 'carrito.html';
    });
});

function agregarAlCarrito() {

    window.location.href = 'carrito.html';
}


const loginBtn = document.getElementById('login');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementById('closeBtn');
const loginForm = document.getElementById('loginForm');


loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});


closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});


window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});


loginForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    if (email === 'admin@inova.cr' && password === '123456') {
        alert('Inicio de sesión exitoso');
        loginModal.style.display = 'none';
    } else {
        alert('Correo o contraseña incorrectos');
    }
});
