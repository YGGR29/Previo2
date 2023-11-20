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
        
        
        listItem.setAttribute("data-movement-id", movement.id);

        movementsList.appendChild(listItem);
    });
}

function showMovementDetails(event) {
    var target = event.target;

    if (target.tagName === "LI") {
        var movementId = target.getAttribute("data-movement-id");

       
        var movementDetails = {
            date: "2023-01-01",
            description: "Ejemplo de Detalles",
            amount: 50.00,
            type: 2,
        };

    
        alert(`Detalles del Movimiento\nFecha: ${movementDetails.date}\nDescripción: ${movementDetails.description}\nMonto: $${movementDetails.amount.toFixed(2)}\nTipo: ${movementDetails.type === 1 ? 'Ingreso' : 'Egreso'}`);
    }
}

function showMovementDetails(event) {
    var target = event.target;

    
    if (target.tagName === "LI") {
        var movementId = target.getAttribute("data-movement-id");

        
        var movementDetails = {
            date: "2023-01-01",
            description: "Ejemplo de Detalles",
            amount: 50.00,
            type: 2,
        };

    
        var detailsMessage = `Detalles del Movimiento\nFecha: ${movementDetails.date}\nDescripción: ${movementDetails.description}\nMonto: $${movementDetails.amount.toFixed(2)}\nTipo: ${movementDetails.type === 1 ? 'Ingreso' : 'Egreso'}`;
        
        
        detailsMessage += "\n\n¿Deseas eliminar este movimiento?";
        if (confirm(detailsMessage)) {
          
            alert("Movimiento eliminado");


            loadFinancialMovements();
        }
    }
}

