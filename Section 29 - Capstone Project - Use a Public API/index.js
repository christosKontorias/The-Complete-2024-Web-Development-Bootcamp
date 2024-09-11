const express = require('express');
const app = express();
const path = require('path');
const cocktailsRoute = require('./routes/cocktails');
const PORT = process.env.PORT || 3000;

// Middleware to serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Use the cocktails route
app.use('/', cocktailsRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
