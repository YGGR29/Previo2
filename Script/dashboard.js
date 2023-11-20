document.addEventListener("DOMContentLoaded", function () {

    loadFinancialMovements();
    loadUserInfo();
});

function loadUserInfo() {
    
    var userInfo = {
        username: "UsuarioEjemplo",
        totalSpent: 500.00, 
    };

    document.getElementById("welcome-message").innerText = `Bienvenido, ${userInfo.username}!`;
    document.getElementById("total-spent").innerText = `Total Gastado: $${userInfo.totalSpent.toFixed(2)}`;
}

function displayMovements(movements) {
    var movementsList = document.getElementById("movements-list");


    movementsList.innerHTML = "";

    movements.forEach(function (movement) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `<span class="movement-date">${movement.date}</span><span class="movement-description">${movement.description}</span><span class="movement-amount">$${movement.amount.toFixed(2)}</span>`;
        movementsList.appendChild(listItem);
    });
}


