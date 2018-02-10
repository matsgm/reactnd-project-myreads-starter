import React, { Component } from 'react'
import Book from './Book'

class Bookshelf extends Component {
  handleChange(id, value) {
    if (this.props.changeShelf)
        this.props.changeShelf(id, value)
  }
  
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.booksInShelf.map( (book) => {
                    return (
                      <Book
                        book={book}
                        key={book.id}
                        changeShelf={(id, value) => {
                          this.handleChange(id, value)
                        }}
                      />
                    )
                  })
            }
          </ol>
        </div>
      </div>
    )

   }
}

export default Bookshelf