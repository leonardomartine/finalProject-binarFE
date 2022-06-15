import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Nav, Navbar, Form, Container, Button, Alert } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { selectUser } from "../slices/userSlice";
import { FiCamera, FiArrowLeft } from "react-icons/fi";
import axios from "axios";
import "../style/style.css";

function About() {
  const navigate = useNavigate();
  const userRedux = useSelector(selectUser);
  const [user] = useState(userRedux.creds);
  const titleField = useRef("");
  const descriptionField = useRef("");
  const [pictureField, setPictureField] = useState();

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const onCreate = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const postPayload = new FormData();
      postPayload.append("title", titleField.current.value);
      postPayload.append("description", descriptionField.current.value);
      postPayload.append("picture", pictureField);

      const createRequest = await axios.post(
        "http://localhost:2000/posts",
        postPayload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const createResponse = createRequest.data;

      if (createResponse.status) navigate("/");
    } catch (err) {
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };

  return (
    <div>
      {/* navbar */}
      <div className="na1 py-4 shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-all">
          <Link to="/">
            <button className="na2 navbar-brand box"></button>
          </Link>
          <Navbar.Brand href="#" className="brand" />
          <div className="offcanvas-body" id="offcanvasRight">
            <div className="info1 navbar">
              <Nav className="text-dark"> Lengkapi Info Akun </Nav>
            </div>
          </div>
        </nav>
      </div>

      <Container className="my-5 w-50">
        <div>
          <Link className="arrow2" to="/" style={{ color: "black" }}>
            <FiArrowLeft />
          </Link>
        </div>
        <div>
          <Nav className="info2 text-dark">Lengkapi Info Akun</Nav>
        </div>
        <Form onSubmit={onCreate}>
          <button className="mb-3 box1">
            <h2>
              <FiCamera
                className="camera"
                onChange={(e) => setPictureField(e.target.files[0])}
              />
            </h2>
          </button>
          <Form className="border1 mb-3">
            <Form.Label>Nama*</Form.Label>
            <Form.Control type="text" ref={titleField} placeholder="Nama" />
          </Form>
          <Form.Group className="mb-3">
            <Form.Label>Kota*</Form.Label>
            <select ref={descriptionField} className="form-select">
              <option hidden>Pilih Kota</option>
              <option value="Jakarta">Jakarta</option>
              <option value="JawaTengah">Jawa Tengah</option>
              <option value="JawaTimur">Jawa Timur</option>
              <option value="JawaBarat">Jawa Barat</option>
              <option value="KalimantanTengah">Kalimantan Tengah</option>
              <option value="KalimantanTimur">Kalimantan Timur</option>
              <option value="KalimantanSelatan">Kalimantan Selatan</option>
              <option value="KalimantanBarat">Kalimantan Barat</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Alamat*</Form.Label>
            <Form.Control
              type="text"
              ref={descriptionField}
              placeholder="Contoh: Jalan Ikan Hiu 33"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>No Handphone*</Form.Label>
            <Form.Control
              type="text"
              ref={descriptionField}
              placeholder="contoh: +628123456789"
            />
          </Form.Group>
          {errorResponse.isError && (
            <Alert variant="danger">{errorResponse.message}</Alert>
          )}
          <button className="myButton w-100" type="submit">
            Simpan
          </button>
        </Form>
      </Container>
      <Link to="/">Go to home page</Link>
    </div>
  );
}

export default About;
