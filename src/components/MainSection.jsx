import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";

const MainSection = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <Row>
            <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
              <a href="#">TRENDING</a>
              <a href="#">PODCAST</a>
              <a href="#">MOODS AND GENRES</a>
              <a href="#">NEW RELEASES</a>
              <a href="#">DISCOVER</a>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="rock">
                <h2>Rock Classics</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="popSection" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection" />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
