import { Container, Row, Col } from "react-bootstrap";
import imgBooks from "../assets/addBooks.png";
import NavigasiBack from "./NavigasiBack";
import {useState } from "react";
import axios from "axios";
import { API_URL } from "../Format/API";

const AddBooks = () => {
  // state untuk form input dan datanya akan dikirimkan ke db.json
  const [bookData, setBookData] = useState({

    nobuku: '',
    namabuku: "",
    penulisbuku: "",
    penerbitbuku: "",
    tahunterbit: '',
    banyakhalaman: "",
    bahasabuku: "",
    linkdownload: ""
  })
  // state untuk pesan berhasil kirim data ketika tombol di submit
  const [message, setMessage] = useState("")

  // buat fungsi untuk menghandle perubahan input
  const handleChange = (e) => {
    setBookData({...bookData, [e.target.name]: e.target.value})
  }

  // buat fungsi untuk menghandle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    // kirim data ke db.json

    // ubah data nobuku dan tahunterbit menjadi number
    const formatedBookData = {
      ...bookData,
      nobuku: parseInt(bookData.nobuku, 10),
      tahunterbit: parseInt(bookData.tahunterbit, 10),
    }
    
    axios.post(`${API_URL}/dbmanajemen.json`, formatedBookData)
    .then(() => {
      setMessage("Data berhasil ditambahkan")
      clearForm();
    })
    .catch (error => {
      console.log('Data gagal ditambahkan ini ada error pak:', error)
    })
  }

  // ketika di submit, form akan kosong
  const clearForm = () => {
    setBookData({
      nobuku: "",
      namabuku: "",
      penulisbuku: "",
      penerbitbuku: "", 
      tahunterbit: "",
      banyakhalaman: "",
      bahasabuku: "",
      linkdownload: ""
    })
  }

  return (
    <div className="clas-addBooks">
        <NavigasiBack />
      <Container>
        <Row>
          <Col md={6}>
            <div className="img d-flex flex-column justify-content-center align-items-center vh-100">
              <img src={imgBooks} alt="..." className="adBooks-image" />
              <h3>ADD BOOKS NOW</h3>
            </div>
          </Col>
          <Col md={6}>
            <div className="addbooks-form d-flex justify-content-center align-items-center vh-100">
                <form onSubmit={handleSubmit} className="col-md-12">
                  {message && 
                  <div className="alert alert-success alert-dismissible">
                    <strong>Success!</strong>{message}
                    <button type="button" className="btn-close" onClick={() => setMessage('')}></button>
                  </div>
                  }
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">ID buku</label>
                        <input type="number" name="nobuku" id="namabuku" value={bookData.nobuku} className="form-control" onChange={handleChange} required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Nama buku</label>
                        <input type="text" name="namabuku" id="namabuku" value={bookData.namabuku} className="form-control" onChange={handleChange} required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Penulis buku</label>
                        <input type="text" name="penulisbuku" id="namabuku" value={bookData.penulisbuku} className="form-control" onChange={handleChange} required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Penerbit buku</label>
                        <input type="text" name="penerbitbuku" id="namabuku" value={bookData.penerbitbuku} className="form-control" onChange={handleChange} required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Tahun terbit</label>
                        <input type="number" name="tahunterbit" id="namabuku" value={bookData.tahunterbit} className="form-control" onChange={handleChange} required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Banyak halaman</label>
                        <input type="text" name="banyakhalaman" id="namabuku" value={bookData.banyakhalaman} className="form-control" onChange={handleChange} required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Bahasa buku</label>
                        <input type="text" name="bahasabuku" id="namabuku" value={bookData.bahasabuku} className="form-control" onChange={handleChange} required/>
                    </div>
                    <div className="form-group d-flex">
                        <label htmlFor="namabuku" className="col-md-4">Link download</label>
                        <input type="text" name="linkdownload" id="namabuku" value={bookData.linkdownload} className="form-control" onChange={handleChange} required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddBooks;
