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
import { BiRadioCircle } from "react-icons/bi";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import axios from "axios";
import "../css/sellerProductPenawar2.css";

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

  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const radios = [
    { name: "O", value: "1" },
    { name: "O", value: "2" },
  ];

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
            style={{ fontWeight: "bold", marginTop: "15px" }}
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
                Status
              </button>
              <button
                className="myButton6-seller-product-penawar"
                type="submit"
                onClick={handleShow}
              >
                Hubungi di
                <FaWhatsapp
                  style={{
                    fontSize: "15px",
                    marginLeft: "10px",
                    marginBotom: "15px",
                  }}
                />
              </button>
              <Modal
                className="Modal-info-penawar-seller"
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                size="sm"
                centered
              >
                <div className="">
                  <Modal.Header closeButton></Modal.Header>
                  <Modal.Body
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    Perbarui status penjualan produkmu
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
                  <div
                    className="control-group"
                    style={{
                      fontSize: "14px",
                      marginLeft: "12px",
                    }}
                  >
                    <label className="control control-radio col-10">
                      <input type="radio" name="radio" checked="checked" />
                      Berhasil terjual
                      <p
                        style={{
                          color: "#8A8A8A",
                          fontSize: "14px",
                        }}
                      >
                        Kamu telah sepakat menjual produk ini kepada pembeli
                      </p>
                      <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio col-10">
                      <input type="radio" name="radio" />
                      Batalkan transaksi
                      <p
                        style={{
                          color: "#8A8A8A",
                          fontSize: "14px",
                        }}
                      >
                        Kamu membatalkan transaksi produk ini dengan pembeli
                      </p>
                      <div className="control_indicator"></div>
                    </label>
                  </div>

                  {/* <Modal.Body>
                  <Col>
                    <ButtonGroup>
                      {radios.map((radio, idx) => (
                        <Button
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={
                            idx % 2 ? "outline-success" : "outline-danger"
                          }
                          name="radio"
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                          {radio.name}
                        </Button>
                      ))}
                    </ButtonGroup>
                  </Col>
                </Modal.Body> */}
                  {/* <Modal.Body>
                  <Col>
                    <ButtonGroup>
                      {radios.map((radio, idx) => (
                        <ToggleButton
                          key={idx}
                          id={`radio-${idx}`}
                          type="radio"
                          variant={
                            idx % 2 ? "outline-success" : "outline-danger"
                          }
                          name="radio"
                          value={radio.value}
                          checked={radioValue === radio.value}
                          onChange={(e) => setRadioValue(e.currentTarget.value)}
                        >
                          {radio.name}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                  </Col>
                </Modal.Body> */}
                  <Modal.Body>
                    <button
                      className="myButton8-seller-product-penawar w-100"
                      onClick={handleClose}
                    >
                      Kirim
                    </button>
                  </Modal.Body>
                </div>
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
