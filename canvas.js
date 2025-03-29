// Get canvas and context
const canvas = document.getElementById("tradingCanvas");
const ctx = canvas.getContext("2d");

let stockPrices = [100]; // Initial price
let balance = 10000; // Virtual money
let holdings = 0; // Stocks owned
let transactions = []; // Buy/Sell points

// Function to draw the stock graph
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw X & Y axes
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(50, 350);
    ctx.lineTo(50, 50);
    ctx.lineTo(750, 50);
    ctx.stroke();

    // Draw stock price line
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < stockPrices.length; i++) {
        let x = 50 + i * 10;
        let y = 350 - stockPrices[i] * 2;
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.stroke();

    // Mark buy/sell points
    transactions.forEach(trade => {
        let x = 50 + trade.time * 10;
        let y = 350 - trade.price * 2;
        ctx.fillStyle = trade.type === "buy" ? "green" : "red";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

// Function to generate stock price
function generateStockPrice() {
    let lastPrice = stockPrices[stockPrices.length - 1];
    let newPrice = lastPrice + (Math.random() * 10 - 5); // Random fluctuation
    newPrice = Math.max(50, parseFloat(newPrice.toFixed(2))); // Keep above $50

    stockPrices.push(newPrice);
    if (stockPrices.length > 70) stockPrices.shift(); // Limit data points

    drawGraph();
}

// Buy stock function
function buyStock() {
    let price = stockPrices[stockPrices.length - 1];
    if (balance >= price) {
        balance -= price;
        holdings += 1;
        transactions.push({ type: "buy", price: price, time: stockPrices.length - 1 });
        updateUI();
        drawGraph();
    } else {
        alert("Not enough balance to buy!");
    }
}

// Sell stock function
function sellStock() {
    if (holdings > 0) {
        let price = stockPrices[stockPrices.length - 1];
        balance += price;
        holdings -= 1;
        transactions.push({ type: "sell", price: price, time: stockPrices.length - 1 });
        updateUI();
        drawGraph();
    } else {
        alert("No stocks to sell!");
    }
}

// Function to update balance & holdings in UI
function updateUI() {
    document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
    document.getElementById("holdings").innerText = holdings;
}

// Start updating stock price every second
setInterval(generateStockPrice, 1000);
drawGraph();