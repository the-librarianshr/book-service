const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database');
let app = express();
const port = 3030;

app.use(express.static(__dirname + '/../public/dist'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/books', (req, res) => {
  db.findAll(response => {
    res.send(response);
  });
});

app.get('/book/:id', (req, res) => {
  const id = req.params.id;
  db.find(id, response => {
    console.log(response);
    res.send(response);
  })
})


app.listen(port, () => console.log(`Listening on port ${port}!`));
