import { Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import logo from "/public/assets/image/logo.png";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

const NavigasiBar = () => {
    const [scrollNavbar, setScrollNavbar] = useState("");
    const { logout } = useContext(AuthContext);
    const { user } = useContext(AuthContext);

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
    });

    const handleLogout = () => {
        logout();
        if (window.confirm('Yakin ingin Logout?')) {
            window.location.reload();
        }
    }

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
                            {user ? (
                                <NavDropdown title={
                                    <span className='align-items-center'>
                                        <span className="mx-2 nav-nameuser">{user.displayName || user.email}</span>
                                        {user.photoURL && (
                                            <img
                                                src={user.photoURL}
                                                alt="Profile"
                                                className="rounded-circle me-1"
                                                style={{ width: '30px', height: '30px' }}
                                            />
                                        )}
                                    </span>
                                }  id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4"   onClick={handleLogout} >
                                      Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Nav.Link href="/login" className="btn mx-2">Sign in</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigasiBar;