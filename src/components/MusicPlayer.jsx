import { Container, Row, Col, Image } from "react-bootstrap";
import shuffleLogo from "../assets/playerbuttons/shuffle.png";
import prevLogo from "../assets/playerbuttons/prev.png";
import playLogo from "../assets/playerbuttons/play.png";
import nextLogo from "../assets/playerbuttons/next.png";
import repeatLogo from "../assets/playerbuttons/repeat.png";

const MusicPlayer = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <Image src={shuffleLogo} alt="shuffle" />
                </a>
                <a href="#">
                  <Image src={prevLogo} alt="prev" />
                </a>
                <a href="#">
                  <Image src={playLogo} alt="play" />
                </a>
                <a href="#">
                  <Image src={nextLogo} alt="next" />
                </a>
                <a href="#">
                  <Image src={repeatLogo} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicPlayer;
