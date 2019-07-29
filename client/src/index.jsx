import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
    };
    this.randomizeBook = this.randomizeBook.bind(this);
  }
  getBook() {
    // var url = document.URL.slice(22);
    // if (url === '') {
    //   url = '1';
    // }
    // $.get('http://localhost:3030/book/' + url).then(book => {
    //   console.log('book', book);
    //   this.setState({ book });
    // });
    $.get(`${process.env.SERVER}/books`).then(books => {
      this.setState({ book: books });
    });
  }

  randomizeBook() {
    this.setState({ path: Math.floor(Math.random() * 100) });
  }
  componentDidMount() {
    this.getBook();
  }
  render() {
    const { book, path } = this.state;
    return <Book randomize={this.randomizeBook} {...book[0]} />;
  }
}

ReactDOM.render(<App />, document.getElementById('app1'));
