const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll()
  .then((categoriesData) => {
    res.json(categoriesData)
  })
  .catch((err) => {
    res.json(err);
  })
  // find all categories, CHECK


  // be sure to include its associated Products HELP?
});

router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id)
  .then((categoryData) => {
    res.json(categoryData)
  })
  .catch((err) => {
    res.json(err);
  })
  // find one category by its `id` value


  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  
  Category.create(
    {
      category_name: req.body.category_name
    }
  )
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
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      category_name: req.body.category_name
    },
    {
      // Gets a category based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
