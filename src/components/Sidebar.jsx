import { useState } from "react";
import { Navbar, Nav, Button, InputGroup, FormControl, Image, Col } from "react-bootstrap";
import { BiHomeAlt, BiBookAlt } from "react-icons/bi";
import mainLogo from "../assets/logo/logo.png";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../redux/actions/musicPlayerAction";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  // Funzione per gestire la ricerca quando viene premuto il tasto INVIO
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      await handleSearch();
    }
  };

  //Chiamata API GET Fetch usando il parametro searchTerm dell'input Search
  const handleSearch = async () => {
    try {
      if (searchTerm) {
        let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchTerm}`);
        if (response.ok) {
          let { data } = await response.json();
          dispatch(setSearchResults(data.slice(0, 8))); // Visualizza solo i primi 8, altrimenti erano troppi
        } else {
          throw new Error("Error in fetching search results");
        }
      }
      setSearchTerm("");
    } catch (err) {
      console.log("Error fetching search results:", err);
    }
  };

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
                  <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={handleKeyDown} //Pressione tasto INVIO
                  />
                  <Button variant="outline-secondary" className="btn-sm" onClick={handleSearch}>
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
