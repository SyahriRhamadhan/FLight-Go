import { Container, Navbar, Offcanvas, Nav, NavDropdown, Button } from "react-bootstrap"


const Navbars = () =>{
    return(
        <Container>
        {['lg'].map((expand) => (
        <Navbar key={expand} bg="transparant" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">FlightGo</Navbar.Brand>
            <Nav className="ms-2">
                <Nav.Link href='/login'>
                    <Button>Sign-In</Button>
                </Nav.Link>
            </Nav>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Dashboard</Nav.Link>
                  <Nav.Link href="#action2">Wishlish</Nav.Link>
                  <Nav.Link href="#action2">History</Nav.Link>
                  <Nav.Link href="#action2">Notification</Nav.Link>
                  <NavDropdown
                    className="ms-5"
                    title="Profile"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Your Account</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Update account
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </Container>
    )
}

export default Navbars