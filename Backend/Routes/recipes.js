const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

router.get('/recipes', async (req, res) => {
    try {
      const recipes = await Recipe.find().populate('creator', 'firstName lastName');
      res.json(recipes);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  

  router.post('/recipes', async (req, res) => {
    const { title, description, ingredients, instructions, image, creator } = req.body;
  
    try {
      const newRecipe = new Recipe({
        title,
        description,
        ingredients,
        instructions,
        image,
        creator
      });
  
      const recipe = await newRecipe.save();
      res.json(recipe);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

  module.exports = router;