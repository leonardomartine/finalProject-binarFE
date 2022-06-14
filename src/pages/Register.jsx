import { Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/main.css";


export default function Register() {

    const styleLabel = {
        borderRadius: '10px',
    };

    const styleLink = {
        textDecoration: 'none',
        color: '#7126B5',
        fontWeight: 'bold',
    }

    return (
        <>
            <Row>
                <Col className="register-left">
                    <img src="/images/img-register.png" />
                </Col>
                <Col className="register-right">
                    <h3 className="mb-3">Daftar</h3>
                    <Form >
                        <Form.Group className="mb-3">
                            <Form.Label>Nama</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nama Lengkap"
                                style={styleLabel}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Contoh: johndee@gmail.com"
                                style={styleLabel}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Masukkan Password"
                                style={styleLabel}
                            />
                        </Form.Group>
                        <Button className="w-100" type="submit" style={styleLabel}>
                            Daftar
                        </Button>
                        <p className="m-4 text-center">
                            Sudah punya akun? <Link style={styleLink} to="/login">Masuk di sini</Link>
                        </p>
                    </Form>
                </Col>
            </Row>
        </>
    );
}
