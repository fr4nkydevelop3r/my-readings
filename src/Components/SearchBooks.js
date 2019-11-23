import React from "react";
import "../App.css";
import { withRouter } from "react-router-dom";

import * as BooksAPI from "../BooksAPI";
import ListBooks from "./ListBooks";

class SearchBooks extends React.Component {
  state = {
    search: "",
    messageError: "",
    resultBooks: []
  };

  goHome = path => {
    this.props.history.push(path);
  };

  handleChange = event => {
    this.setState({
      search: event.target.value
    });
  };

  handleResult = books => {
    books.map(book => {
      for (let i = 0; i < this.props.listBooks.length; i++) {
        if (this.props.listBooks[i].id === book.id) {
          book.shelf = this.props.listBooks[i].shelf;
          break;
        } else {
          book.shelf = "none";
        }
      }
      return book;
    });

    this.setState({
      resultBooks: books,
      messageError: ""
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.search !== prevState.search) {
      if (this.state.search.length > 0) {
        BooksAPI.search(this.state.search).then(books => {
          if (books.hasOwnProperty("error")) {
            this.setState({
              messageError: "no results",
              resultBooks: []
            });
          } else {
            this.handleResult(books);
          }
        });
      } else {
        this.setState({
          resultBooks: [],
          messageError: ""
        });
      }
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <button
            className="close-search"
            onClick={() => {
              this.goHome("/");
            }}
          >
            Close
          </button>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.search}
              onChange={this.handleChange}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.messageError && this.state.search && (
            <div>{this.state.messageError}</div>
          )}

          {this.state.resultBooks && this.state.search && (
            <ListBooks
              books={this.state.resultBooks}
              handleShelf={this.props.handleShelf}
              action="addBook"
              addBook={this.props.addBook}
            />
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBooks);
