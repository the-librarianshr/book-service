import React from 'react';
import Book from './Book.jsx';
import vars from '../../env.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [],
    };
  }
  getBook() {
    var url = document.location.pathname.slice(1);
    if (url === '') {
      url = '1';
    }
    $.get(`http://${vars.SERVER}/book/` + url).then(book => {
      console.log('book', book);
      this.setState({ book });
    });
  }
  componentDidMount() {
    this.getBook();
  }
  render() {
    const { book } = this.state;
    return <Book {...book[0]} />;
  }
}

export default App;
