import { Container, Navbar, Offcanvas, Nav, NavDropdown, Button } from "react-bootstrap"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Navbars = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const navigate = useNavigate();

  useEffect(() => {
    token ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, [token]);

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("role")
    window.location.reload();
  };
  return (
    <Container>
      {['lg'].map((expand) => (
        <Navbar key={expand} bg="transparant" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="/">FlightGo</Navbar.Brand>
            {!isLoggedIn ? (
            <Nav className="ms-2">
              <Nav.Link href='/Login'>
                <Button>Sign-In</Button>
              </Nav.Link>
            </Nav>
             ) : ( 
            <>
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
                    <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
                    <Nav.Link href="#action2">Wishlish</Nav.Link>
                    <Nav.Link href="#action2">History</Nav.Link>
                    <Nav.Link href="#action2">Notification</Nav.Link>
                    <NavDropdown
                      className="ms-5"
                      title="Profile"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/ProfilePage">Youre Profile</NavDropdown.Item>
                      <NavDropdown.Item href="/EditProfile">
                        Update account
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logout}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </>
            )} 
          </Container>
        </Navbar>
      ))}
    </Container>
  )
}

export default Navbars