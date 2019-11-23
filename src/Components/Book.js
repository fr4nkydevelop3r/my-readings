import React from "react";
import "../App.css";

class Book extends React.Component {
  handleChange = event => {
    if (this.props.updateShelf) {
      this.props.updateShelf(this.props.book, event.target.value);
    } else {
      this.props.addBook(this.props.book, event.target.value);
    }
  };

  render() {
    return (
      <li>
        {" "}
        {this.props.book.imageLinks && (
          <div className="book">
            <div className="book-top">
              {this.props.book.imageLinks && (
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
                  }}
                ></div>
              )}
              <div className="book-shelf-changer">
                <select
                  onChange={this.handleChange}
                  value={
                    this.props.book.hasOwnProperty("shelf")
                      ? this.props.book.shelf
                      : "none"
                  }
                >
                  <option value="move" disabled>
                    Move to...
                  </option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            {this.props.book.authors && (
              <div className="book-authors">
                {" "}
                {this.props.book.authors.map((author, index) => (
                  <div key={index}>{author}</div>
                ))}{" "}
              </div>
            )}
          </div>
        )}
      </li>
    );
  }
}

export default Book;
