import { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, toggleLike } from "../redux/actions/musicPlayerAction";
import Sidebar from "./Sidebar";

const MainSection = () => {
  // STATE
  const [rockSongs, setRockSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);

  const dispatch = useDispatch();
  const likedSongs = useSelector((state) => state.likedSongs);

  // chimata Fetch GET
  const fillMusicSection = async (artistName, setSongsFunction) => {
    try {
      let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${artistName}`);
      if (response.ok) {
        let { data } = await response.json();
        setSongsFunction(data.slice(0, 4)); //Per adesso prendo solo i primi 4 album
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  // API degli artisti usando il componentDidMount() tramite Hooks
  useEffect(() => {
    fillMusicSection("queen", setRockSongs);
    fillMusicSection("katyperry", setPopSongs);
    fillMusicSection("eminem", setHipHopSongs);
  }, []);

  const albumCard = (singleSong) => {
    const isLiked = likedSongs[singleSong.id] || false;
    return (
      <div className="col text-center" key={singleSong.id}>
        <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" onClick={() => dispatch(setCurrentSong(singleSong))} />
        <p>
          Track: {singleSong.title}
          <br />
          Artist: {singleSong.artist.name}
        </p>
        <Button variant={isLiked ? "success" : "outline-success"} onClick={() => dispatch(toggleLike(singleSong.id))}>
          {isLiked ? "Mi Piace" : "Aggiungi ai Mi Piace"}
        </Button>
      </div>
    );
  };

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
                <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
                  {rockSongs.map(albumCard)}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="pop">
                <h2>Pop Culture</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
                  {popSongs.map(albumCard)}
                </Row>
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <div id="hiphop">
                <h2>#HipHop</h2>
                <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
                  {hipHopSongs.map(albumCard)}
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
