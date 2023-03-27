import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavItems from '../components/utils/NavItems';
import OffcanvasSec from '../components/utils/OffcanvasSec';

function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="Header-Selection">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow} />
          <Navbar.Collapse className='d-none d-lg-block' id="responsive-navbar-nav">
            <NavItems />
          </Navbar.Collapse>
        </Container>
        <OffcanvasSec handleClose={handleClose} show={show} />
      </Navbar>
    </div>
  );
}

export default Header;