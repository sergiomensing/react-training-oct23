// Create express app
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

var db = require('./database.js');

// Server port
const HTTP_PORT = 8000;
// Start server
app.listen(HTTP_PORT, () => {
  console.log(`Server running on http://localhost:${HTTP_PORT}/`);
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Root endpoint
app.get('/', (req, res, next) => {
  res.send(
    '<h1>Arcady workshop Recipe API</h1><p>A simple NodeJS Express.js server with a SQLite database</p>'
  );
});

app.get('/health/', (req, res, next) => {
  res.json({ message: 'Ok' });
});

// Insert here other API endpoints
app.get('/recipes', (req, res, next) => {
  const sql = 'select * from recipes';
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(
      rows.map((row) => ({
        ...row,
        ingredients: JSON.parse(row.ingredients),
        steps: JSON.parse(row.steps),
      }))
    );
  });
});

app.post('/recipes', (req, res, next) => {
  if (!req.body) {
    res.status(422).json({
      message: 'Please send a json object of the recipe as request body',
    });
    return;
  }
  const {
    title,
    img = '',
    description = '',
    ingredients,
    steps = [],
  } = req.body;
  if (!title || !ingredients) {
    res.status(422).json({
      message:
        'At least the title and ingredients of the recipe are required. Optional are: img, description & steps',
    });
    return;
  }
  if (ingredients.filter((x) => !!!x.name).length > 0) {
    res.status(422).json({
      message:
        'Every ingredient should at least have a name. Unit & quantity is optional',
    });
    return;
  }

  const insert =
    'INSERT INTO recipes (title, img, description, ingredients, steps) VALUES (?,?,?,?,?)';
  db.run(
    insert,
    [
      title,
      img,
      description,
      JSON.stringify(ingredients),
      JSON.stringify(steps),
    ],
    function (err) {
      if (err) {
        res
          .status(422)
          .json({ message: 'The title of the recipe is already taken' });
      } else {
        res.status(201).json({ ...req.body, id: this.lastID });
      }
      return;
    }
  );
});

app.get('/recipes/:recipeId', (req, res, next) => {
  const sql = `select * from recipes where id=${req.params.recipeId}`;
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      ...rows.map((row) => ({
        ...row,
        ingredients: JSON.parse(row.ingredients),
        steps: JSON.parse(row.steps),
      }))[0],
    });
  });
});

app.put('/recipes/:recipeId', (req, res, next) => {
  const {
    title = '',
    img = '',
    description = '',
    ingredients = [],
    steps = [],
  } = req.body;

  const sql = `
  UPDATE recipes 
    SET title = ?,
        img = ?,
        description = ?,
        ingredients = ?,
        steps = ?
    WHERE id = ?`;

  const params = [
    title,
    img,
    description,
    JSON.stringify(ingredients),
    JSON.stringify(steps),
    req.params.recipeId,
  ];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    if (this.changes > 0) {
      res.json({
        ...req.body,
      });
    } else {
      res.status(500).json({ error: 'The recipe cannot be updated' });
    }
    return;
  });
});

app.delete('/recipes/:recipeId', (req, res, next) => {
  const sql = `delete from recipes where id=${req.params.recipeId}`;
  var params = [];
  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    res.json({ message: 'Recipe successfully deleted' });
    return;
  });
});

// Default response for any other request
app.get('*', function (req, res) {
  res.sendStatus(404);
});
