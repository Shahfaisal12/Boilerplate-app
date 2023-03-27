import Offcanvas from "react-bootstrap/Offcanvas";
import NavItems from "./NavItems";

function OffcanvasSec({ show, handleClose }) {
  return (
    <div className="d-block d-md-none">
      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="bg-offcanvas"
      >
        <Offcanvas.Header
          closeButton
          className="justify-content-end"
        ></Offcanvas.Header>
        <Offcanvas.Body>
          <NavItems handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default OffcanvasSec;
