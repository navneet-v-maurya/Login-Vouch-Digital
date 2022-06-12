import { Navbar, Container, Nav } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light" className="navbar">
      <Container>
        <Navbar.Brand href="#home">ATools</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link className="text-white text-center" href="#home">
            Start Free Trial
          </Nav.Link>
          <Nav.Link className="text-white text-center" href="#features">
            Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
