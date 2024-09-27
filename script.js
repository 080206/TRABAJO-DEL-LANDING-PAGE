// NUestras 
const validUsername = "fernando";
const validPassword = "moreno";

//================================
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("error-msg");

    // Validacion 
    if (username === validUsername && password === validPassword) {
        // Guardamos el usuario en localStorage
        localStorage.setItem("username", username);
        // Redirigimos al index
        window.location.href = "index.html";
    } else {
        errorMsg.style.display = "block";
        errorMsg.textContent = "Usuario o contraseña incorrectos";
    }
});


// Aqui estamos agregando la funcion para poder cerrar nuestra sesion
function logout() {
    localStorage.removeItem("username");
    window.location.href = "login.html";
}
