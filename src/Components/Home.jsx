import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className='clas-home d-flex justify-content-center align-items-center vh-100' id='home'>
      <Container>
        <Row>
            <Col md={6}>
                <div className="home-judul">
                    <h1>Come on, donate your book so that other people can read it</h1>
                </div>
                <div className="home-buttons">
                    <Link to="/addbooks" className='btn'>add books</Link>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
