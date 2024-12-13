import { Container, Row, Col, Image } from "react-bootstrap";
import shuffleLogo from "../assets/playerbuttons/shuffle.png";
import prevLogo from "../assets/playerbuttons/prev.png";
import playLogo from "../assets/playerbuttons/play.png";
import nextLogo from "../assets/playerbuttons/next.png";
import repeatLogo from "../assets/playerbuttons/repeat.png";
import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const currentSong = useSelector((state) => state.currentSong);
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={8} className="offset-lg-2 mb-1">
          <Row className="h-100 align-items-top">
            <Col md={4} className="mt-0">
              {currentSong ? (
                <div className="d-flex text-light gap-2" style={{ fontSize: "12px" }}>
                  <img src={currentSong.album.cover_medium} alt="Album Cover" className="w-25 rounded" style={{ objectFit: "cover" }} />
                  <div>
                    <p className="fw-bold mt-3 mb-0">{currentSong.title}</p>
                    <p className="mt-1">
                      <strong>Artist: </strong>
                      {currentSong.artist.name}
                    </p>
                  </div>
                </div>
              ) : (
                <p></p>
              )}
            </Col>
            <Col md={4} className="offset-lg-1 playerControls mt-2">
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
