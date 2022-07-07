import { useRef, useState } from "react";
import {
  Nav,
  Navbar,
  Form,
  Container,
  Alert,
  Button,
  Row,
  Col,
  Card,
  Modal,
} from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import "../css/sellerProductPenawar.css";

function UpdateProduct() {
  const navigate = useNavigate();
  const nameField = useRef("");
  const priceField = useRef("");
  const categoryField = useRef("");
  const descriptionField = useRef("");
  const [isSold, setIsSold] = useState(Boolean);
  const [isPublish, setIsPublish] = useState(Boolean);
  const [imageField, setImageField] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <div className="na1-seller-product-penawar py-4 shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-all">
          <Link to="/">
            <button className="na2-seller-product-penawar navbar-brand box-update-product"></button>
          </Link>
          <Navbar.Brand href="#" />
          <div className="info-seller-product-penawar navbar">
            <Nav className="text-dark">Info Penawar</Nav>
          </div>
        </nav>
      </div>

      <Container className="card-main">
        <div>
          <Link
            className="arrow2-seller-product-penawar"
            to="/"
            style={{ color: "black" }}
          >
            <FiArrowLeft />
          </Link>
        </div>
        <div>
          <Nav className="info3-seller-product-penawar text-dark">
            Info Penawar
          </Nav>
        </div>
        <Form onSubmit={onCreate}>
          <Card className="card-seller-product-penawar">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Img src="/images/carousel-2.png" alt="" />
                </Col>
              </Row>
              <Card.Title className="nama-seller-product-penawar">
                Nama Pembeli
              </Card.Title>
              <Card.Text className="card-kota-seller-product-penawar">
                Kota
              </Card.Text>
            </Card.Body>
          </Card>

          <Form.Group
            className="mb-3"
            style={{ fontWeight: "bold", marginTop: "15px"}}
          >
            <Form.Label>Daftar Produkmu yang Ditawar</Form.Label>
          </Form.Group>

          <div className="shadow-seller-product-penawar">
            <Card
              className="card2-seller-product-penawar"
              style={{ marginRight: "100px", width: "100%" }}
            >
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Img src="/images/carousel-2.png" alt="" />
                  </Col>
                </Row>
                <Card.Text className="card2-kota-seller-product-penawar">
                  Penawaran produk<p>20 Apr, 14:04</p>
                </Card.Text>
                <Card.Title
                  className="nama2-seller-product-penawar"
                  style={{ marginTop: "-12px" }}
                >
                  Jam Tangan Casio
                </Card.Title>
                <Card.Text className="nama2-seller-product-penawar">
                  Rp 250.000
                </Card.Text>
                <Card.Text className="nama2-seller-product-penawar">
                  Ditawar Rp 200.000
                </Card.Text>
              </Card.Body>
            </Card>
            <div className=" d-flex" style={{ marginBottom: "20px" }}>
              <button
                className="myButton7-seller-product-penawar"
                type="submit"
                onClick={() => setIsPublish(false)}
              >
                Tolak
              </button>
              <button
                className="myButton6-seller-product-penawar"
                type="submit"
                onClick={handleShow}
              >
                Terima
              </button>
              <Modal
                className="Modal-info-penawar-seller"
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                size="sm"
                centered
              >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  Yeay kamu berhasil mendapat harga yang sesuai
                </Modal.Body>
                <Modal.Body
                  style={{
                    color: "#8A8A8A",
                    marginTop: "-25px",
                    fontSize: "14px",
                  }}
                >
                  Segera hubungi pembeli melalui whatsapp untuk transaksi
                  selanjutnya
                </Modal.Body>
                <Container>
                  <Col className="gambar-modal">
                    <Modal.Body
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        textAlign: "center",
                        fontSize: "14px",
                      }}
                    >
                      Product Match
                    </Modal.Body>
                    <Card.Img
                      src="/images/carousel-2.png"
                      alt=""
                      style={{
                        color: "black",
                        width: "48px",
                        height: "48px",
                        marginLeft: "10px",
                        borderRadius: "12px",
                        flex: "none",
                      }}
                    />
                    <Card.Title
                      className="nama-seller-product-penawar"
                      style={{
                        color: "black",
                        marginTop: "-50px",
                      }}
                    >
                      Nama Pembeli
                    </Card.Title>
                    <Card.Text className="card-kota-seller-product-penawar">
                      Kota
                    </Card.Text>
                    <Card.Img
                      src="/images/carousel-2.png"
                      alt=""
                      style={{
                        color: "black",
                        width: "48px",
                        height: "48px",
                        marginLeft: "10px",
                        borderRadius: "12px",
                        flex: "none",
                      }}
                    />
                    <Card.Title
                      className="nama2-seller-product-penawar"
                      style={{
                        marginTop: "-50px",
                      }}
                    >
                      Jam Tangan Casio
                    </Card.Title>
                    <Card.Text
                      className="nama2-seller-product-penawar"
                      style={{
                        marginTop: "-5px",
                      }}
                    >
                      <s>Rp 250.000 </s>
                    </Card.Text>
                    <Card.Text className="nama2-seller-product-penawar">
                      Ditawar Rp 200.000
                    </Card.Text>
                  </Col>
                </Container>
                <Modal.Body>
                  <button
                    className="myButton8-seller-product-penawar w-100"
                    onClick={handleClose}
                  >
                    <Link
                      to="/sellerproductpenawar2"
                      className="text-decoration-none"
                      style={{
                        color: "white",
                      }}
                    >
                      Hubungi via Whatsapp
                      <FaWhatsapp
                        style={{
                          fontSize: "15px",
                          marginLeft: "6px",
                          marginBotom: "15px",
                        }}
                      />
                    </Link>
                  </button>
                </Modal.Body>
              </Modal>
              {/* <button
                className="myButton6-seller-product-penawar"
                type="submit"
                onClick={() => setIsPublish(true)}
              >
                Terima
              </button> */}
            </div>
          </div>
          {errorResponse.isError && (
            <Alert variant="danger">{errorResponse.message}</Alert>
          )}
        </Form>
      </Container>
    </div>
  );
}

export default UpdateProduct;
