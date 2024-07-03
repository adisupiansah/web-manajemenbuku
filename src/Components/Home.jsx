import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

const Home = () => {
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()

  // validasi jika user ingin menambahkan books tetapi belum login, arahkan user ke halaman login
  const handleAddBooks = () => {
    if (!user) {
      Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Anda harus login terlebih dahulu!',
        confirmButtonText: 'Login',
        showCancelButton: true,
        cancelButtonText: 'Batal'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: '/addbooks' } })
        }
      })
    } else {
      navigate('/addbooks')
    }
  }

  return (
    <div className='clas-home d-flex justify-content-center align-items-center vh-100' id='home'>
      <Container>
        <Row>
            <Col md={6}>
                <div className="home-judul">
                    <h1>Come on, donate your book so that other people can read it</h1>
                </div>
                <div className="home-buttons">
                    <div className='btn' onClick={() => handleAddBooks()}>add books</div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
