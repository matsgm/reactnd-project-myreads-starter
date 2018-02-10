import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchPage extends Component {
  state = {
    query: '',
    searchResult: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    
    if (query) {
      BooksAPI.search(query).then( (res) => {
        //console.log(res)
        this.setState({searchResult: res})
      })
    }
  }

  handleChange(id, value) {
    if (this.props.changeShelf)
        this.props.changeShelf(id, value)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResult.map( (book) => {
                    return (
                      <Book
                        book={book}
                        key={book.id}
                        changeShelf={(id, value) => {
                          this.handleChange(id, value)
                        }}
                        myBooks={this.props.books}
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

export default SearchPage