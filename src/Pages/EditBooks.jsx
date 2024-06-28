// import { useState } from 'react'
import { Container, Row, Col, Navbar } from 'react-bootstrap'
import gambar from '../assets/editbook.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useContext} from 'react'
import { useEffect, useState } from 'react'
import { BooksContext } from '../Context/BooksContext'
import { API_URL } from '../Format/API'
import axios from 'axios'
import { FaLongArrowAltLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const EditBooks = () => {
  // menerima navigasi id dari detailbuku
  const {id} = useParams()
  const navigate = useNavigate()
  // ambil data buku dari context dan buatkan state untuk edit data buku berdasarkan id
  const {books, setBooks} = useContext(BooksContext)
  const [editBook, setEditBook] = useState({
    nobuku: '',
    namabuku: '',
    penulisbuku: '',
    penerbitbuku: '',
    tahunterbit: '',
    banyakhalaman: '',
    bahasabuku: '',
    linkdownload: ''
  })

  useEffect(() => {
    const book = books.find((book) => book.id === id)
    if(book) {
      setEditBook(book)
    }
  }, [id, books])

  const handleChange = (e) => {
    const {name, value} = e.target
    setEditBook({
      ...editBook, 
      [name]: value
    })
  }

  // axios untuk mengedit data
  const updateBook = async () => {
    try {
      await axios.put(`${API_URL}/dbmanajemen/${id}.json`, editBook)
      if(editBook) {
        const updatedBooks = books.map((book) => (
          book.id === id ? editBook : book
        ))
        setBooks(updatedBooks)
      }
    } 
    catch (error) {
     console.error('ada error:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBook();
    navigate(`/detailbuku/${id}`) 
  }


  return (
    <div className="clas-editbooks">
     <Container>
     <Navbar className="navigasiback-nav ">
        <Container>
          <Link to={`/detailbuku/${editBook.id}`} className="navigasiback-brand"><FaLongArrowAltLeft className="icon"/> back</Link>
        </Container>
      </Navbar>
        <Row>
          <Col md={6}>
            <div className="img d-flex flex-column justify-content-center align-items-center vh-100">
              <img src={gambar} alt="..." className="adBooks-image" />
              <h3>EDIT BOOKS NOW</h3>
            </div>
          </Col>
          <Col md={6}>
            <div className="addbooks-form d-flex justify-content-center align-items-center vh-100">
                <form className="col-md-12" onSubmit={handleSubmit}>
                
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">ID buku</label>
                        <input type="number" name="nobuku" id="namabuku" value={editBook.nobuku} onChange={handleChange} className="form-control"  readOnly/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Nama buku</label>
                        <input type="text" name="namabuku" id="namabuku" value={editBook.namabuku} onChange={handleChange} className="form-control"  required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Penulis buku</label>
                        <input type="text" name="penulisbuku" id="namabuku" value={editBook.penulisbuku} onChange={handleChange} className="form-control"  required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Penerbit buku</label>
                        <input type="text" name="penerbitbuku" id="namabuku" value={editBook.penerbitbuku} onChange={handleChange} className="form-control"  required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Tahun terbit</label>
                        <input type="number" name="tahunterbit" id="namabuku" value={editBook.tahunterbit} onChange={handleChange} className="form-control"  required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Banyak halaman</label>
                        <input type="text" name="banyakhalaman" id="namabuku" value={editBook.banyakhalaman} onChange={handleChange} className="form-control"  required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Bahasa buku</label>
                        <input type="text" name="bahasabuku" id="namabuku" value={editBook.bahasabuku} onChange={handleChange} className="form-control"  required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Link download</label>
                        <input type="text" name="linkdownload" id="namabuku" value={editBook.linkdownload} onChange={handleChange} className="form-control"  required/>
                    </div>
                    <div className="ms-auto d-flex">
                        <button type="submit" className="btn btn-primary">edit</button>
                    </div>
                </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EditBooks
