import { Container, Form, Button, Row, Col } from "react-bootstrap"
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../features/authSlice";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };
    return (
        <Container className=""><br /><br /><br /><br /><br />
            <Row className="mt-5">
                <Col md className="">
                    <Form onSubmit={Auth} className="">
                        {isError && <p className="has-text-centered">{message}</p>}
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button className="text-center m-auto" variant="primary" type="submit">
                            Sign-In
                            {isLoading ? "Loading..." : "Login"}
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