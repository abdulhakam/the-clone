import { Container, Nav, Navbar, Button, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Navibar.css"
export function Navibar() {
  const [showNavMenu, setShowNavMenu] = useState("");
  const navigate = useNavigate();
  return (
    <Navbar variant="dark" bg="dark">
      <Container>
        <Navbar.Brand href="/">The CLONE</Navbar.Brand>
        <Nav className="mx-auto">
          <NavDropdown
            title="Movies"
            href="#movies"
            show={showNavMenu === "movieDD"}
            onMouseEnter={() => setShowNavMenu("movieDD")}
            onMouseLeave={() => setShowNavMenu("")}
          >
            <NavDropdown.Item onClick={() => navigate('/movies/popular')} href="#">Popular</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/movies/nowplaying')} href="#"> Now Playing </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/movies/upcoming')} href="#"> Upcoming </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/movies/toprated')} href="#"> Top Rated </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="TV Shows"
            href="#tvshows"
            show={showNavMenu === "TVDD"}
            onMouseEnter={() => setShowNavMenu("TVDD")}
            onMouseLeave={() => setShowNavMenu("")}
          >
            <NavDropdown.Item onClick={() => navigate('/tvshows/popular')} href="#">Popular</NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/tvshows/airingtoday')} href="#"> Airing Today </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/tvshows/onair')}href="#"> On TV </NavDropdown.Item>
            <NavDropdown.Item onClick={() => navigate('/tvshows/toprated')} href="#"> Top Rated </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            title="People"
            href="#people"
            show={showNavMenu === "PeopleDD"}
            onMouseEnter={() => setShowNavMenu("PeopleDD")}
            onMouseLeave={() => setShowNavMenu("")}
          >
            <NavDropdown.Item onClick={() => navigate('/person/popular')} href="#">Popular People</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}