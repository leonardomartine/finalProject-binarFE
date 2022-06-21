import { useRef, useState } from "react";
import { Form,Row, Col, Container, Button, Alert, div } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "../css/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, FaCoffee } from '@fortawesome/free-solid-svg-icons'






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
    // const onLoginGoogleSuccess = async (credentialResponse) => {
    //         const userToLoginPayload = {
    //             google_credential: credentialResponse.credential,
    //         };
    //   console.log(credentialResponse);
    //     try {
  
    //         const loginGoogleRequest = await axios.post(
    //             "http://localhost:2000/auth/login-google",
    //             userToLoginPayload
    //         );

    //         const loginGoogleResponse = loginGoogleRequest.data;

    //         if (loginGoogleResponse.status) {
    //             localStorage.setItem("token", loginGoogleResponse.data.token);

    //             navigate("/");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    const styleLabel = {
        borderRadius: '10px',
    };

    const styleLink = {
        textDecoration: 'none',
        color: '#7126B5',
        fontWeight: 'bold',
    }
        const [passwordShown, setPasswordShown] = useState(false);
        const togglePassword = () => {
            // When the handler is invoked
            // inverse the boolean state of passwordShown
            setPasswordShown(!passwordShown);
          };


    return (
        <Row>
        <Col className="loginpict">
             <img src="/images/img.png" width="720px" height="960px" />
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
                    
                    {/* <div className="pass-login">
                    <input className="border-0 outline-none" type={passwordShown ? "text" : "password"} placeholder="Masukkan Password"  ref={passwordField}  />
                        <button className=" float-right border-0" onClick={togglePassword}><FontAwesomeIcon  icon={faEye}></FontAwesomeIcon></button>
                        </div> */}
                    <Form.Control
                        type={passwordShown ? "text" : "password"}
                        ref={passwordField}
                        placeholder="Masukkan Password"
                        style={styleLabel}      
                    />
                    <button className=" float-right border-0" onClick={togglePassword}><FontAwesomeIcon  icon={faEye}></FontAwesomeIcon></button>
                     
                </Form.Group>
                {/* <div className="my-3">
                    <GoogleOAuthProvider clientId="497081172258-0crldr8o7o1nn9th5bb6nm46vdqmnid1.apps.googleusercontent.com">
                        <GoogleLogin
                            onSuccess={onLoginGoogleSuccess}
                            onError={() => {
                                console.log("Login Failed");
                            }}
                        />
                    </GoogleOAuthProvider>
                </div> */}

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
