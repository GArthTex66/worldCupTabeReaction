import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand className='nav-brand' href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
        <Nav.Link className="nav-link" href="#features">Features</Nav.Link>
        <Nav.Link className="nav-link" href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}

export default BasicExample;