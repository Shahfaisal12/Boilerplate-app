import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

const NavItems = ({ handleClose }) => {
  return (
    <>
      <Nav className="me-auto">
        <Link onClick={handleClose} className="nav-link" to="/about">
          About
        </Link>
        <Link onClick={handleClose} className="nav-link" href="#pricing">
          Pricing
        </Link>
      </Nav>
      <Nav>
        <Link onClick={handleClose} className="nav-link" href="#deets">
          More deets
        </Link>
        <Link
          onClick={handleClose}
          className="nav-link"
          eventKey={2}
          href="#memes"
        >
          Dank memes
        </Link>
      </Nav>
    </>
  );
};

export default NavItems;
