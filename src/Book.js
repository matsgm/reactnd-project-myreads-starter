import React, { Component } from 'react'

class Book extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (this.props.changeShelf) this.props.changeShelf(this.props.book, event.target.value)
  }

  render() {
    const { book } = this.props
    let shelf

    if (this.props.myBooks) {
      let findBook = this.props.myBooks.filter( (b) => {
        return b.id === this.props.book.id
      })
      
      if (findBook.length > 0) {
        console.log(findBook[0].shelf)
        shelf = findBook[0].shelf
      }
    } else if (this.props.book.shelf) {
      shelf = this.props.book.shelf
    }
    
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select value={shelf ? shelf : ""} onChange={this.handleChange}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>          
    )
  }
}

export default Book