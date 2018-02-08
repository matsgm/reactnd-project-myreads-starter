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
    BooksAPI.search(query).then( (res) => {
      console.log(res)
      this.setState({searchResult: res})
    })
  }

  handleChange(id, value) {
    console.log("Book handle change")
    if (this.props.changeShelf)
        this.props.changeShelf(id, value)
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
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