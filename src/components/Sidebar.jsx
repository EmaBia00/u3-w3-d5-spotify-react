import { Navbar, Nav, Button, InputGroup, FormControl, Image, Col } from "react-bootstrap";
import { BiHomeAlt, BiBookAlt } from "react-icons/bi";
import mainLogo from "../assets/logo/logo.png";

const Sidebar = () => {
  return (
    <Col xs={2}>
      <Navbar expand="md" fixed="left" className="flex-column px-2" id="sidebar">
        <Navbar.Brand href="index.html">
          <Image src={mainLogo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse className="align-items-start" id="navbarNavAltMarkup">
          <Nav className="navbar-nav">
            <ul className="list-unstyled">
              <li>
                <Nav.Link href="#" className="d-flex align-items-center gap-1">
                  <BiHomeAlt /> Home
                </Nav.Link>
              </li>
              <li>
                <Nav.Link href="#" className="d-flex align-items-center gap-1">
                  <BiBookAlt /> Your Library
                </Nav.Link>
              </li>
              <li>
                <InputGroup className="mt-3">
                  <FormControl placeholder="Search" aria-label="Search" />
                  <Button variant="outline-secondary" className="btn-sm">
                    GO
                  </Button>
                </InputGroup>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-btn">
          <Button className="signup-btn" type="button">
            Sign Up
          </Button>
          <Button className="login-btn" type="button">
            Login
          </Button>
          <div>
            <a href="#">Cookie Policy</a> | <a href="#">Privacy</a>
          </div>
        </div>
      </Navbar>
    </Col>
  );
};

export default Sidebar;
