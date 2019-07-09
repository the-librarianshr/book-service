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
    var url = document.URL.slice(27);
    if (url === '') {
      $.get('http://localhost:3030/books').then(book => {
        this.setState({ book });
      });
    } else {
      $.get('http://localhost:3030/' + url).then(book => {
        console.log('book', book);
        this.setState({ book });
      });
    }
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
