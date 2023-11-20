async function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("error-message").innerText = "Por favor, completa todos los campos.";
        return false;
    } else {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                window.location.href = "Html/dashboard.html";
            } else {
               
                document.getElementById("error-message").innerText = "Usuario o contraseña incorrectos.";
            }
        } catch (error) {
            console.error('Error al autenticar al usuario:', error);
        }

        return false; 
    }
}


