document.addEventListener("DOMContentLoaded", function () {
    let balance = 10000; // Initial balance
    const balanceDisplay = document.getElementById("balance");
    const stockSelect = document.getElementById("stockSelect");
    const tradeType = document.getElementById("tradeType");
    const quantityInput = document.getElementById("quantity");
    const executeTradeButton = document.getElementById("executeTrade");

    balanceDisplay.innerText = `${balance.toFixed(2)}`;

    executeTradeButton.addEventListener("click", function () {
        const selectedStock = stockSelect.value;
        const tradeAction = tradeType.value;
        const quantity = parseInt(quantityInput.value, 10);
        const stockPrice = getStockPrice(selectedStock);

        if (isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity.");
            return;
        }

        const totalCost = stockPrice * quantity;

        if (tradeAction === "Buy" && balance >= totalCost) {
            balance -= totalCost;
        } else if (tradeAction === "Sell") {
            balance += totalCost;
        } else {
            alert("Insufficient balance for this trade.");
            return;
        }

        balanceDisplay.innerText = `${balance.toFixed(2)}`;
        alert(`Trade executed: ${tradeAction} ${quantity} of ${selectedStock} at $${stockPrice.toFixed(2)} each.`);
    });

    function getStockPrice(stock) {
        const stockPrices = {
            "BTC": 56623,
            "ETH": 3500,
            "XRP": 1.20
        };
        return stockPrices[stock] || 0;
    }
});