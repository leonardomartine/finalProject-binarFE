import { useRef, useState } from "react";
import { Form, Row, Col, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "../css/login.css";


export default function Login() {

    const navigate = useNavigate();

    const emailField = useRef("");
    const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const userToLoginPayload = {
                email: emailField.current.value,
                password: passwordField.current.value,
            };

            const loginRequest = await axios.post(
                "http://localhost:8888/auth/login",
                userToLoginPayload
            );

            const loginResponse = loginRequest.data;

            if (loginResponse.status) {
                localStorage.setItem("token", loginResponse.data.token);

                navigate("/");
            }
        } catch (err) {
            console.log(err);
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };
    const styleLabel = {
        borderRadius: '10px',
    };

    const styleLink = {
        textDecoration: 'none',
        color: '#7126B5',
        fontWeight: 'bold',
    }
    const [passwordShown, setPasswordShown] = useState(false);
    


    return (
        <Row>
            <Col className="loginpict">
                <img src="/images/img.png" width="100%" height="100%" />
            </Col>
            <Col className="login">
                <Container className="my-100">
                    <h4 className="mb-3 text-left">Masuk</h4>

                    <Form onSubmit={onLogin}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                ref={emailField}
                                placeholder="Contoh: johndee@gmail.com"
                                style={styleLabel}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 ">
                            <Form.Label>Password
                            </Form.Label>
                    <Form.Control
                        type={passwordShown ? "text" : "password"}
                        ref={passwordField}
                        placeholder="Masukkan Password"
                        style={styleLabel}
                    />
                    {/* <button className=" float-right border-0" onClick={togglePassword}><FontAwesomeIcon  icon={faEye}></FontAwesomeIcon></button> */}
                </Form.Group>

                        <Button className="login-button w-100" type="submit" style={styleLabel}>
                            Masuk
                        </Button>
                        <p className="loginp">
                            Belum punya akun?<Link style={styleLink} to="/register">Daftar di sini</Link>
                        </p>

                        {errorResponse.isError && (
                            <Alert variant="danger">{errorResponse.message}</Alert>
                        )}

                    </Form>

                </Container>
            </Col>
        </Row>
    );
}
