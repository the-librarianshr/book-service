const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const db = require('../database');
let app = express();
const port = 3030;

app.use(bodyParser.urlencoded({ extended: true }));


app.options('*', cors());
app.use(express.static(__dirname + '/../public/dist'));

app.get('/books', cors(), ((req, res) => {
  db.findAll((response => {
    res.json(response);
    res.end();
  }));
}));

app.get('/book/:id', cors(), (req, res) => {
  let id = req.params.id;
  if (typeof JSON.parse(id) !== 'number') {
    id = 0;
  }
  console.log('id: ', id);
  axios.get('http://localhost:3002/authors/' + id).then(res => res);
  axios.get('https://localhost:3004/');
  db.find(id, response => {
    res.json(response);
    res.end();
  });
});

app.use('/:id', express.static(__dirname + '/../public/dist'));




app.listen(port, () => console.log(`Listening on port ${port}!`));
