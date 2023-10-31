import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import { Container } from "react-bootstrap";
import CommentArea from "./CommentArea";
import { useState } from "react";

// const BookList = ({ books }) => {
//   console.log(books);
//   return (
//     <Container>
//       <Row className="gy-2">
//         {books.map((book, index) => {
//           return <SingleBook key={index} book={book} />;
//         })}
//       </Row>
//     </Container>
//   );
// };

const BookList = ({ books }) => {
  // state = {
  //   selectedBookAsin: null,
  //   searchTerm: "",
  //   filteredBooks: this.props.books, //cosi mostro tutti i libri all'inizio
  // };
  const [selectedBookAsin, setSelectedBookAsin] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    // this.setState({ searchTerm, selectedBookAsin: null }); //piazzo quello che scrivo nell'input nello state
    setSearchTerm(null);
    setSelectedBookAsin(null);

    const filtered = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    ); //modifico l'array iniziale filtrando e includendo solo quello che ho scritto nell'input e che è presente nello state
    // this.setState({ filteredBooks: filtered }); //mostro solo quelli che corrispondono
    setFilteredBooks(filtered);
  };
  const handleToggleSelected = (asin) => {
    // this.setState({
    //   selectedBookAsin: asin,
    // });
    setSelectedBookAsin(asin);
  };

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control bg-success"
            placeholder="Title Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </Row>
      <Row className="mb-3">
        <Col xs={6} sm={6} md={8} lg={6} xl={8}>
          <Row className="gy-2">
            {filteredBooks.map((book, index) => (
              <SingleBook
                key={index}
                book={book}
                isSelected={book.asin === selectedBookAsin}
                handleToggleSelected={handleToggleSelected}
              />
            ))}
          </Row>
        </Col>

        <Col xs={6} md={4} lg={6} xl={4}>
          <CommentArea
            // bookSelected={book.asin}
            // stateSelected={this.state.selected}
            // bookState={this.state.bookAsin}
            bookSelected={selectedBookAsin}
          />
        </Col>
      </Row>
    </Container>
  );
};
export default BookList;
