const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// API endpoint for calculator
app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    let result;
    switch (operation) {
        case 'add': result = num1 + num2; break;
        case 'subtract': result = num1 - num2; break;
        case 'multiply': result = num1 * num2; break;
        case 'divide':
            if (num2 === 0) return res.json({ error: "Cannot divide by zero" });
            result = num1 / num2;
            break;
        default:
            return res.json({ error: "Invalid operation" });
    }

    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

