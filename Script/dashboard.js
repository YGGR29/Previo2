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

    function addMovement() {
        var description = document.getElementById("description").value;
        var movementType = document.getElementById("movement-type").value;
        var amount = document.getElementById("amount").value;
    
        
        var newMovement = {
            date: getCurrentDate(), 
            description: description,
            type: parseInt(movementType), 
            amount: parseFloat(amount), 
        };
    
        closeModal();
        loadFinancialMovements();
    }
    
    function getCurrentDate() {
        var now = new Date();
        var year = now.getFullYear();
        var month = (now.getMonth() + 1).toString().padStart(2, '0');
        var day = now.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
}


