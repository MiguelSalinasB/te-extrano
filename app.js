document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Función para validar el nombre de usuario y la contraseña
    const validateCredentials = (username, password) => {
        const predefinedUsername = "Ivonne&Miguel";
        const predefinedPassword = "20012024";
        return username === predefinedUsername && password === predefinedPassword;
    };

    if (validateCredentials(username, password)) {
        alert('Inicio de sesión exitoso');
        window.location.href = 'nosotros.html'; // Redirigir a la página nosotros.html
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});

document.getElementById('forgotPassword').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Redirigiendo a la página de recuperación de contraseña...');
    window.location.href = 'olvidaste.html';
    // Aquí puedes agregar la lógica para redirigir a la página de recuperación de contraseña
});
