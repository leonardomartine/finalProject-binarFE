import { useRef, useState } from "react";
import {
  Nav,
  Navbar,
  Form,
  Container,
  Alert,
  Button,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { BiPlus } from "react-icons/bi";
import axios from "axios";
import "../css/mainRio.css";

function InfoProduct() {
  const navigate = useNavigate();
  const nameField = useRef("");
  const priceField = useRef("");
  const categoryField = useRef("");
  const descriptionField = useRef("");
  const [isSold, setIsSold] = useState(Boolean);
  const [isPublish, setIsPublish] = useState(Boolean);
  const [imageField, setImageField] = useState();
  // const [preview, setPreview] = useState();

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const onCreate = async (e) => {
    e.preventDefault();
    // if (preview) {
    //   setIsPublish(false)
    // }else (
    //   setIsPublish(true)
    // )

    try {
      const token = localStorage.getItem("token");
      const postPayload = new FormData();
      postPayload.append("name", nameField.current.value);
      postPayload.append("price", priceField.current.value);
      postPayload.append("category", categoryField.current.value);
      postPayload.append("description", descriptionField.current.value);
      postPayload.append("sold", isSold);
      postPayload.append("isPublish", isPublish);
      postPayload.append("image", imageField);

      const createRequest = await axios.post(
        "http://localhost:8888/api/product",
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
            <Form.Control type="text" ref={nameField} placeholder="Nama" />
          </Form>
          <Form className="border1 mb-3" style={{ fontWeight: "bold" }}>
            <Form.Label>Harga Produk</Form.Label>
            <Form.Control type="text" ref={priceField} placeholder="Rp 0,00" />
          </Form>
          <Form.Group className="mb-3" style={{ fontWeight: "bold" }}>
            <Form.Label>Kategori</Form.Label>
            <select ref={categoryField} className="form-select">
              <option hidden>Pilih Kategori</option>
              <option value="hobi">Hobi</option>
              <option value="kendaraan">Kendaraan</option>
              <option value="Baju">Baju</option>
              <option value="Elektronik">Elektronik</option>
              <option value="kesehatan">Kesehatan</option>
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
          <button className="mb-3 box2" >
            <h2>
              <BiPlus
                className="plus"
              />
            </h2>
            <Form.Control type="file" multiple onChange={(e) => {
              setImageField(e.target.files[0])
            }} />
          </button>
          <div className="d-flex justify-content-between">
            <Button className="myButton7" type="submit" onClick={() => setIsPublish(false)}>
              Preview
            </Button>
            <Button className="myButton6" type="submit" onClick={() => setIsPublish(true)}>
              Terbitkan
            </Button>
          </div>
          {errorResponse.isError && (
            <Alert variant="danger">{errorResponse.message}</Alert>
          )}
        </Form>
      </Container>
    </div>
  );
}

export default InfoProduct;
