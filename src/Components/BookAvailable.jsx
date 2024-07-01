import { Container, Row, Col, Table } from "react-bootstrap";
// import books context
import { useContext } from "react";
import { BooksContext } from "../Context/BooksContext";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import $ from 'jquery';
import { useEffect } from "react";


const BookAvailable = () => {
  // mengambil data buku dari context
  const { books} = useContext(BooksContext);

  // useEffect untuk menggunakan dataTables
 useEffect(() => {
  if(books.length > 0 ) {
    $(document).ready(function() {
      $('#example').DataTable();
    });
  }
 }, [books])

  // buat validasi jika data buku kosong
  if(books.length === 0 ) {
    return (
      <div className="clas-bookavailable">
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center vh-100">
              <p>No books available</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

  return (
    <div className="clas-bookavailable">
      <Container>
        <Row>
          <Col>
            {/* <div className="form-search">
              <div className="d-flex justify-content-center align-items-center">
                <div className="bookavailable-input col-6 ">
                  <Card>
                    <Card.Body>
                      <span>Hello teman-teman untuk meng upload buku harap di sertakan Link untuk membaca ya agar teman2 kita bisa membaca dengan gratis😁</span>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div> */}
          </Col>
        </Row>

      {/* data tables */}
        <Row>
          <Col>
            <div className="bookavailable-table" id="daftarbuku">
                <h2>Books available</h2>
                <Table id="example" bordered hover responsive style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th className="text-center">id buku</th>
                    <th className="text-center">Nama buku</th>
                    <th className="text-center">Penulis</th>
                    <th className="text-center">Penerbit</th>
                    <th className="text-center">Tahun Buku</th>
                    <th className="text-center">Upload by</th>
                    <th className="text-center">detail buku</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book, index) => (
                    <tr key={index}>
                      <td className="text-center">{book.nobuku}</td>
                      <td className="text-center">{book.namabuku}</td>
                      <td className="text-center">{book.penulisbuku}</td>
                      <td className="text-center">{book.penerbitbuku}</td>
                      <td className="text-center">{book.tahunterbit}</td>
                      <td className="text-center">{book.email}</td>
                      <td className="text-center"><Link to={`/detailbuku/${book.id}`} className="bookavailable-eye"><FaRegEye/></Link></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BookAvailable;
