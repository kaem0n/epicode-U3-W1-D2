// DATA IMPORTS
import fantasy from '../data/fantasy.json'
import history from '../data/history.json'
import horror from '../data/horror.json'
import romance from '../data/romance.json'
import scifi from '../data/scifi.json'

// COMPONENT IMPORTS
import { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'

// COMPONENT FUNCTION

class AllTheBooks extends Component {
  state = {
    activeGenre: fantasy,
  }
  render() {
    return (
      <>
        <Container fluid className="mb-5">
          <Row className="mb-3">
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="dark">Generi</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => this.setState({ activeGenre: fantasy })}
                  >
                    Fantasy
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ activeGenre: history })}
                  >
                    History
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ activeGenre: horror })}
                  >
                    Horror
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ activeGenre: romance })}
                  >
                    Romance
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => this.setState({ activeGenre: scifi })}
                  >
                    Sci-Fi
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="g-3" xs={2} md={3} lg={4} xl={5} xxl={6}>
            {this.state.activeGenre.map((book) => {
              return (
                <Col key={book.asin}>
                  <Card className="h-100">
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title>{book.title}</Card.Title>
                        <Card.Subtitle>
                          <Badge bg="danger">ASIN: {book.asin}</Badge>
                        </Card.Subtitle>
                      </div>
                      <div>
                        <Card.Text className="m-0">
                          <span className="fw-bold">Category:</span>{' '}
                          {book.category}
                        </Card.Text>
                        <Card.Text>
                          <span className="fw-bold">Price:</span> {book.price}€
                        </Card.Text>
                        <Button variant="dark" className="w-100">
                          Aggiungi al carrello
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}

export default AllTheBooks
