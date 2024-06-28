import { Container, Row, Col} from 'react-bootstrap'
import gambarbuku from "../assets/books.png"
import NavigasiBack from './NavigasiBack'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { BooksContext } from '../Context/BooksContext' 

const DetailBuku = () => {
    // meneriman id dari BooksAvailable
    const {id} = useParams()
    const {books} = useContext(BooksContext)
    const book = books.find((books) => books.id === id)

    // validasi jika tidak ada data buku berdasarkan id
    if(!book) {
        return (
            <div className="clas-detailbuku">
                <NavigasiBack />
                <Container>
                    <Row>
                        <Col className='d-flex justify-content-center align-items-center vh-100'>
                            <p>No books available</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

  return (
    <div className="clas-detailbuku">
        <NavigasiBack />
        <Container>
            <Row className='detailbuku-content'>
                <Col md={6}>
                    <div className="detailbuku-img d-flex justify-content-center align-items-center vh-100">
                        <img src={gambarbuku} alt="buku"/>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="detailbuku-table d-flex flex-column justify-content-center align-items-center vh-100">
                        <div className="col-md-12 line">
                            <h2>id buku: {book.id}</h2>
                        </div>

                        <div className="col-md-12 line-desc d-flex">
                            <div className="col-md-6">
                                <p className='line-title'>Nama Buku</p>
                            </div>
                            <div className="col-md-">
                                <p className='line-text'>{book.namabuku}</p>
                            </div>
                        </div>

                        <div className="col-md-12 line-desc d-flex">
                            <div className="col-md-6">
                                <p className='line-title'>Penulis Buku</p>
                            </div>
                            <div className="col-md-">
                                <p className='line-text'>{book.penulisbuku}</p>
                            </div>
                        </div>
                        <div className="col-md-12 line-desc d-flex">
                            <div className="col-md-6">
                                <p className='line-title'>Penerbit Buku</p>
                            </div>
                            <div className="col-md-">
                                <p className='line-text'>{book.penerbitbuku}</p>
                            </div>
                        </div>
                        <div className="col-md-12 line-desc d-flex">
                            <div className="col-md-6">
                                <p className='line-title'>Tahun Terbit</p>
                            </div>
                            <div className="col-md-">
                                <p className='line-text'>{book.tahunterbit}</p>
                            </div>
                        </div>
                        <div className="col-md-12 line-desc d-flex">
                            <div className="col-md-6">
                                <p className='line-title'>Banyak Halaman</p>
                            </div>
                            <div className="col-md-">
                                <p className='line-text'>{book.banyakhalaman}</p>
                            </div>
                        </div>
                        <div className="col-md-12 line-desc d-flex">
                            <div className="col-md-6">
                                <p className='line-title'>Bahasa</p>
                            </div>
                            <div className="col-md-">
                                <p className='line-text'>{book.bahasabuku}</p>
                            </div>
                        </div>
                        <div className="col-md-12 line-btn d-flex">
                          <Link target='_blank' to={`${book.linkdownload}`} className='btn'>Lihat Buku</Link>
                          <Link to={`/editbuku/${book.id}`} className='ms-auto btn'>Edit</Link>
                        </div>
                        
                    </div>
                </Col>
            </Row>


        </Container>
    </div>
  )
}

export default DetailBuku
