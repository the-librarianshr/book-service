const faker = require('faker');
const request = require('request');
const db = require('.');
const fs = require('fs');

const genres = ['Fantasy', 'Science Fiction', 'Adventure', 'Non-Fiction', 'Romance', 'Poetry', 'Mystery', 'Horror', 'History', 'Memoir', 'Humor'];
const getRandomImage = (cb) => {
  const randomPage = Math.floor(Math.random() * 30).toString();
  const randomImage = Math.floor(Math.random() * 30).toString();
  request({ url: 'https://picsum.photos/v2/list?page=' + randomPage }, (err, response) => {
    var id = JSON.parse(response.body)[randomImage].id;
    cb('https://picsum.photos/id/' + id + '/150/231.jpg');
  });
}
books = [];
const createBook = (id) => {
  let book = {};
  getRandomImage(res => {
    book.id = id;
    book.author_id = Math.floor(Math.random() * 100);
    book.title = `The ${faker.company.catchPhraseAdjective()} ${faker.company.catchPhraseNoun().split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
      }`;
    book.description = faker.lorem.sentences(5);
    book.year = faker.date.past(100);
    book.rating = `${Math.floor(Math.random() * 5)}.${Math.floor(Math.random() * 10)}`;
    book.image = res;
    book.genre = genres[Math.floor(Math.random() * 9)];
    books.push(book);
    db.save(book);
  });
};

for (var i = 0; i <= 100; i++) {
  createBook(i);
}

setTimeout(() => {
  console.log(books);
  fs.writeFileSync('data.json', JSON.stringify(books));
}, 3000);




