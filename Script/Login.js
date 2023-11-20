function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        document.getElementById("error-message").innerText = "Por favor, completa todos los campos.";
        return false;
    } else {
        
        window.location.href = "dashboard.html"; 
        return true;
    }
}

