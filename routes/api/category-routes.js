const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll()
  .then((categoriesData) => {
    res.json(categoriesData)
  })
  // find all categories, CHECK
  // be sure to include its associated Products HELP?
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id)
  .then((categoryData) => {
    res.json(categoryData)
  })
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    })
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
