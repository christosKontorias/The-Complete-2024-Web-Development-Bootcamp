const express = require('express');
const router = express.Router();
const pool = require('../db/db');
const axios = require('axios');

// Fetch all books
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM books ORDER BY date_read DESC');
        res.render('index', { books: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching books');
    }
});

// Route to display the 'Add New Book' form
router.get('/new', (req, res) => {
    res.render('book', { book: null }); // book is null when adding a new book
});


// Add a new book
router.post('/', async (req, res) => {
    const { title, author, rating, date_read, notes, isbn } = req.body;
    try {
        const cover_url = `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
        await pool.query(
            'INSERT INTO books (title, author, rating, date_read, notes, cover_url) VALUES ($1, $2, $3, $4, $5, $6)',
            [title, author, rating, date_read, notes, cover_url]
        );
        res.redirect('/books');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error adding book');
    }
});

// Route to display the 'Edit Book' form
router.get('/edit/:id', async (req, res) => {
    const bookId = req.params.id;
    try {
        const result = await pool.query('SELECT * FROM books WHERE id = $1', [bookId]);
        if (result.rows.length > 0) {
            const book = result.rows[0];
            res.render('book', { book });  // Render the form with the book data
        } else {
            res.status(404).send('Book not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error fetching the book');
    }
});

// Route to handle updating the book
router.post('/edit/:id', async (req, res) => {
    const bookId = req.params.id;
    const { title, author, rating, date_read, notes } = req.body;

    try {
        // Make sure to sanitize user input and handle potential SQL injection.
        const query = `
            UPDATE books 
            SET title = $1, author = $2, rating = $3, date_read = $4, notes = $5
            WHERE id = $6
        `;
        const values = [title, author, rating, date_read, notes, bookId];

        await pool.query(query, values);
        res.redirect('/');  // Redirect to home or the book list after the update
    } catch (err) {
        console.error(err);
        res.status(500).send('Error updating the book');
    }
});


// Delete a book
router.post('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM books WHERE id = $1', [id]);
        res.redirect('/books');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error deleting book');
    }
});

module.exports = router;
