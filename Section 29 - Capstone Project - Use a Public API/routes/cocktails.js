const express = require('express');
const router = express.Router();
const axios = require('axios');

// Render home page
router.get('/', (req, res) => {
    res.render('index');
});

// Fetch a random cocktail
router.get('/random-cocktail', async (req, res) => {
    const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

    try {
        const response = await axios.get(apiUrl);
        const cocktail = response.data.drinks[0];
        res.render('cocktail', { cocktail });
    } catch (error) {
        console.error(error);
        res.render('cocktail', { cocktail: null });
    }
});

module.exports = router;
