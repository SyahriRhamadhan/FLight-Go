import { Container, Form, Button,Row, Col } from "react-bootstrap"
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://flightgo-be-server-production.up.railway.app/v1/api/register-member", {
        email: email,
        password: password,
      });
      navigate("/Login");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
      }
    }
  };
    return(
        <Container className=""><br /><br /><br /><br /><br />
            <Row className="mt-5">
                    <Col md className="">
                        <Form onSubmit={saveUser} className="">
                        <p className="text-center">{message}</p>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button className="text-center m-auto" variant="primary" type="submit">
                                Sign-In
                            </Button>
                            <p> Already Have A Account?
                                <a href="/Login">Login</a>
                            </p>
                        </Form>
                    </Col>
            </Row>
        </Container>
    )
}

export default Register