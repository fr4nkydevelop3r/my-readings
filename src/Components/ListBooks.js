import React from 'react';
import '../App.css';
import Book from './Book';

class ListBooks extends React.Component {
    render() {
        return(

            <ol className="books-grid">
                    {this.props.books.map((book, item) => (
                        <Book 
                            book={book}
                            key={item}
                            handleShelf={this.props.handleShelf}

                        />
                    ))}  
             </ol>   
           
        )
    }
}

export default ListBooks;