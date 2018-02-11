import React from 'react'
import Book from './Book'

const Bookshelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.booksInShelf.map( (book) => {
                  return (
                    <Book
                      book={book}
                      key={book.id}
                      changeShelf={(book, shelf) => {
                        props.changeShelf(book, shelf)
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

export default Bookshelf