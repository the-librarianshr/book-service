const mongoose = require('mongoose');
mongoose.connect('mongodb://13.58.96.251:27017/books', { useNewUrlParser: true, useCreateIndex: true });

let bookSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  author_id: Number,
  image: String,
  title: String,
  description: String,
  year: Number,
  rating: Number,
  genre: String,
});

let Repo = mongoose.model('Book', bookSchema, 'books');

let save = (data) => {
  const book = new Repo(data);
  book.save((err, book) => {
    if (err) console.log('error:', err);
    console.log('saved to database');
  });
}

let saveMany = (data) => {
  Repo.collection.insert(data, (err, books) => {
    if (err) console.log(err);
  });
}

let findAll = (cb) => {
  Repo.find().exec((err, res) => {
    if (err) throw err;
    cb(res);
  });
}

let find = (id, cb) => {
  Repo.find({ "id": id }, (err, res) => {
    if (err) throw err;
    cb(res);
  })
}
module.exports.save = save;
module.exports.saveMany = saveMany;
module.exports.findAll = findAll;
module.exports.find = find;