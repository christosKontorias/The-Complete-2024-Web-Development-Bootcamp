const express = require('express');
const app = express();
const path = require('path');
const bookRoutes = require('./routes/bookRoutes');
const bodyParser = require('body-parser');

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Routes
app.use('/books', bookRoutes);

// Home route (redirect to /books)
app.get('/', (req, res) => {
    res.redirect('/books');
});

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
