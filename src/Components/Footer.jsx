import { Container, Row, Col } from 'react-bootstrap'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";


const Footer = () => {
  return (
    <div className="clas-footer">
      <div className="footer-content">
        <Container>
            <Row>
               <Col md={4}>
                    <div className="footer-text">
                        <h6>Addres office</h6>
                        <p>Jln. Soedirman No. 58 Kpg.Baru Tebing Poros</p>
                    </div>
               </Col>
               <Col md={5}>
                    <div className="footer-text">
                        <h6>Social Media</h6>
                        <div className="footer-icon d-flex">
                            <p><FaInstagram className='icons-ig'/> @library.world</p>
                            <p className='mx-3'><FaXTwitter className='icons-twitter'/> libraryworld</p>
                            <p className='mx-2'><IoLogoTiktok className='icons-tiktok'/> libraryworld</p>
                        </div>
                    </div>
               </Col>
                <Col md={3}>
                      <div className="footer-text">
                            <h6>Phone</h6>
                            <div className="footer-icon">
                                <p><FaWhatsapp className='icons-wa mx-2'/>08123456789</p>
                            </div>
                      </div>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer
