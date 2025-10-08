const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional routes for menu links
app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1><p>This is the about page.</p><a href="/">Back</a>');
});

app.get('/contact', (req, res) => {
    res.send('<h1>Contact Page</h1><p>Contact us at contact@example.com</p><a href="/">Back</a>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

