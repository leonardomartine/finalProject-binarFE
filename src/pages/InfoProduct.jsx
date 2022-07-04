import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Col,
  Row,
  Nav,
  Navbar,
  Form,
  Container,
  Button,
  Alert,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { selectUser } from "../slices/userSlice";
import { FiArrowLeft } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import "../css/mainRio.css";

function InfoProduct() {
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
              <Nav className="text-dark"> Lengkapi Detail Produk </Nav>
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
          <Nav className="info3 text-dark">Lengkapi Detail Produk</Nav>
        </div>
        <Form onSubmit={onCreate}>
          <Form className="border1 mb-3" style={{ fontWeight: "bold" }}>
            <Form.Label>Nama Produk</Form.Label>
            <Form.Control type="text" ref={titleField} placeholder="Nama" />
          </Form>
          <Form className="border1 mb-3" style={{ fontWeight: "bold" }}>
            <Form.Label>Harga Produk</Form.Label>
            <Form.Control type="text" ref={titleField} placeholder="Rp 0,00" />
          </Form>
          <Form.Group className="mb-3" style={{ fontWeight: "bold" }}>
            <Form.Label>Kategori</Form.Label>
            <select ref={descriptionField} className="form-select">
              <option hidden>Pilih Kategori</option>
              <option value="Hobi">Hobi</option>
              <option value="Kendaraan">Kendaraan</option>
              <option value="Baju">Baju</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Kesehatan">Kesehatan</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" style={{ fontWeight: "bold" }}>
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              type="text"
              ref={descriptionField}
              placeholder="Contoh: Jalan Ikan Hiu 33"
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3" style={{ fontWeight: "bold" }}>
            Foto Produk
          </Form.Group>
          <button className="mb-3 box2">
            <h2>
              <BiPlus
                className="plus"
                onChange={(e) => setPictureField(e.target.files[0])}
              />
            </h2>
          </button>
          <Row>
            <Col>
              <button className="myButton7 w-100" type="submit">
                Preview
              </button>
            </Col>
            <Col>
              <button className="myButton6 w-100" type="submit">
                Terbitkan
              </button>
            </Col>
          </Row>
          {errorResponse.isError && (
            <Alert variant="danger">{errorResponse.message}</Alert>
          )}
        </Form>
      </Container>
    </div>
  );
}

export default InfoProduct;
