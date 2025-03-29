let balance = 0;

function addFunds() {
    const amount = prompt("Enter amount to add:");
    if (amount && !isNaN(amount)) {
        balance += parseFloat(amount);
        updateWallet();
        addTransaction(`Added $${parseFloat(amount).toFixed(2)}`);
    }
}

function withdrawFunds() {
    const amount = prompt("Enter amount to withdraw:");
    if (amount && !isNaN(amount)) {
        const withdrawAmount = parseFloat(amount);
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            updateWallet();
            addTransaction(`Withdrew $${withdrawAmount.toFixed(2)}`);
        } else {
            alert("Insufficient funds!");
        }
    }
}

function updateWallet() {
    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
}

function addTransaction(message) {
    const history = document.getElementById('history');
    const newTransaction = document.createElement('li');
    newTransaction.textContent = message;
    history.appendChild(newTransaction);
}
