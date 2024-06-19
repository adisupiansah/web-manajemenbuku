import { Container, Nav, Navbar} from "react-bootstrap";
import logo from "/public/assets/image/logo.png";
import { useState, useEffect } from "react";

const NavigasiBar = () => {

  // state untuk navbar jika di scroll akan keluar background warna putih
  const [scrollNavbar, setScrollNavbar] = useState("");

  const changeBackground = () => { 
    if(window.scrollY >= 80) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  } 

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  })


  return (
    <div className="clas-navigasi">
      <Navbar expand="lg" className={`fixed-top ${scrollNavbar ? 'nav-color' : 'nav-transparent'}`}>
        <Container>
          <Navbar.Brand href="/" className="brand"><img src={logo} className="navbar-logo"/> Seek Knowledge</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
              <Nav.Link href="#daftarbuku" className="navbar-link">Daftar Buku</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigasiBar;
