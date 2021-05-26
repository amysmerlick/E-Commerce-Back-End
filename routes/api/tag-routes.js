const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll()
  .then((tagsData) => {
    res.json(tagsData)
  })
  // find all tags, CHECK
  // be sure to include its associated Product data, HELP?
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id)
  .then((tagData) => {
    res.json(tagData)
  })
  // find a single tag by its `id`, CHECK
  // be sure to include its associated Product data, HELP?
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then((newTag) => {
    res.json(newTag);
  })
  .catch((err) => {
    res.json(err);
  })
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
