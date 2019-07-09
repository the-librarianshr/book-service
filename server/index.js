const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database');
let app = express();
const port = 3030;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', cors(), (req, res) => {
  db.findAll(response => {
    res.json(response);
  });
});
app.use('/', express.static(__dirname + '/../public/dist'));


app.get('/:id', cors(), (req, res) => {
  const id = req.params.id;
  console.log('id: ', id);
  db.find(id, response => {
    res.json(response);
  });
});

app.use('/book/:id', express.static(__dirname + '/../public/dist'));


app.listen(port, () => console.log(`Listening on port ${port}!`));
