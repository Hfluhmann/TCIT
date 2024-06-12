require('dotenv').config()
const express = require('express');
const app = express();
const port = parseInt(process.env.PORT);
const bodyParser = require('body-parser')
const { sequelize } = require('./connection');
const { Post } = require('./models/posts');
const cors = require("cors");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll()
    return res.json({ posts });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/posts', async (req, res) => {
  console.log(req.body)
  try {
    const name = req.body?.name;
    const description = req.body?.description;

    if (!name || !description) {
      return res.status(400).json({ message: 'Bad request, name or description not found' });
    }
    const save = await Post.create({
      name,
      description
    });
    return res.status(201).json({ post: save });
  } catch (error) {
    console.log('Error', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

app.delete('/posts/:id', async (req, res) => {
  const itemId = req.params.id;
  try {
    const record = await Post.findOne({
      where: { id: itemId }
    });

    const deletedItem = await Post.destroy({
      where: { id: itemId }
    });

    if (deletedItem) {
      res.status(200).json({ post: record });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while deleting the item' });
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection success');
    return sequelize.sync();
  })
  .then(() => {
    console.log('Sync models');
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Connection fail', error);
  });
