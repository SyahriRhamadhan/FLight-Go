import { Container, Navbar, Offcanvas, Nav, NavDropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from  "../../features/authSlice";
import { useNavigate } from "react-router-dom";
const NavbarsAdmin = () =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/login");
  };
    return(
        <Container>
        {['lg'].map((expand) => (
        <Navbar key={expand} bg="transparant" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">FlightGo Admin</Navbar.Brand>
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
                  <Nav.Link href="/">Landing Page</Nav.Link>
                  <Nav.Link href="#action1">Ticket</Nav.Link>
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
                    <NavDropdown.Item onClick={logout}>
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

export default NavbarsAdmin