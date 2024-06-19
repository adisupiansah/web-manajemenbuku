import { Navbar, Container } from "react-bootstrap";
import { FaLongArrowAltLeft } from "react-icons/fa";

const NavigasiBack = () => {
  return (
    <div className="clas-navigasiback">
      <Navbar className="navigasiback-nav ">
        <Container>
          <Navbar.Brand href="/" className="navigasiback-brand"><FaLongArrowAltLeft className="icon"/> back</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigasiBack;
