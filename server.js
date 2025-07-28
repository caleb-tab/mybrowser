// Import the express module
const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const port = process.env.PORT || 3000; // Use environment variable PORT or default to 3000

// Serve static files from the current directory
// This makes your index.html and any other static assets (like CSS, JS) available
app.use(express.static(__dirname));

// Define a route for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log('Open your browser and navigate to the forwarded port in Codespaces!');
});

