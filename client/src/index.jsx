import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      path: 0,
    };
    this.randomizeBook = this.randomizeBook.bind(this);
  }
  getBooks() {
    $.ajax({ method: 'GET', url: 'http://localhost:3030/books' }).then(books => {
      this.setState({ books });
      console.log(books);
    });
  }
  randomizeBook() {
    this.setState({ path: Math.floor(Math.random() * 100) });
  }
  componentDidMount() {
    this.getBooks();
    this.randomizeBook();
  }
  render() {
    const { books, path } = this.state;
    return <Book randomize={this.randomizeBook} {...books[path]} />;
  }
}

ReactDOM.render(<App />, document.getElementById('app1'));
