import React from 'react';
import '../App.css';
import ListBooks from './ListBooks';

class WantToRead extends React.Component {
    render(){
        return(
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <ListBooks 
              books={this.props.listBooks}
            /> 
          </div>
        )
    }
}

export default WantToRead;