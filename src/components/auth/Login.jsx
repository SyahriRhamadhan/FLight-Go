import { Container, Form, Button, Row, Col} from "react-bootstrap"
const Login = () => {
    return(
        <Container className=""><br /><br /><br /><br /><br />
            <Row className="mt-5">
                    <Col md className="">
                        <Form  className="">
                        {/* <p className="text-center">{msg}</p> */}
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button className="text-center m-auto" variant="primary" type="submit">
                                Sign-In
                            </Button>
                            <p> Not a FlightGo Member?
                                <a href="/Register">Register</a>
                            </p>
                        </Form>
                    </Col>
            </Row>
        </Container>
        
    )
}

export default Login