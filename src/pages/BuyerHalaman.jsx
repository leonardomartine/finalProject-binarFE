import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useRef, useState } from "react";
import Navbar from "../components/NavBar";
import {
  Nav,
  Form,
  Alert,
  Modal,
  Card,
  Row,
  Col,
  Button,
  Carousel,
  Container,
} from "react-bootstrap";
import "../css/buyerHalaman.css";
// import "../css/main.css";
import { FiArrowLeft } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

function DetailProduct() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="bg-nav">
        <Navbar />
      </div>

      <Container>
        <div className="flex-container d-flex">
          <div style={{ width: "100%" }}>
            <div className="carousel">
              <Carousel className="carousel-img-buyer-halaman">
                <Carousel.Item>
                  <div>
                    <Link className="arrow2-buyer-halaman" to="/">
                      <FiArrowLeft />
                    </Link>

                    <img
                      className="img-buyer-halaman d-block w-100"
                      src="/images/carousel-2.png"
                      alt=""
                    />
                  </div>
                </Carousel.Item>

                <Carousel.Item>
                  <div>
                    <Link className="arrow2-buyer-halaman" to="/">
                      <FiArrowLeft />
                    </Link>

                    <img
                      className="img-buyer-halaman d-block w-100 "
                      src="/images/carousel-2.png"
                      alt=""
                    />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div>
                    <Link className="arrow2-buyer-halaman" to="/">
                      <FiArrowLeft />
                    </Link>

                    <img
                      className="img-buyer-halaman d-block w-100 "
                      src="/images/carousel-2.png"
                      alt=""
                    />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
          {/* </div> */}

          <div className="buyer-halaman-inti">
            <Card className="card-buyer-halaman">
              <h4 className="jam-buyer-halaman ">
                Jam Tangan Casio
                <BsBookmark style={{ fontSize: "23px", marginLeft: "170px" }} />
              </h4>

              <h6 className="aksesoris-buyer-halaman">Aksesoris</h6>
              <h5 className="harga-buyer-halaman">Rp 250.000</h5>
              <Button
                className="btnPurple-buyer-halaman"
                type="submit"
                onClick={handleShow}
              >
                Saya tertarik dan ingin nego
              </Button>
              <Modal
                className="Modal-buyer-halaman"
                show={show}
                onHide={handleClose}
                aria-labelledby="contained-modal-title-vcenter"
                size="sm"
                centered
              >
                <Modal.Header
                  closeButton
                  style={{ border: "none" }}
                ></Modal.Header>
                <Modal.Body className="modal-buyer-halaman">
                  Masukkan Harga Tawarmu
                </Modal.Body>
                <Modal.Body className="modal-2-buyer-halaman">
                  Harga tawaranmu akan diketahui penjual, jika penjual cocok
                  kamu akan segera dihubungi penjual.
                </Modal.Body>
                <Container>
                  <Card className="modal-1-card-buyer-halaman">
                    <Col className="gambar-modal-buyer-halaman">
                      <Card.Img
                        className="card-2-buyer-halaman"
                        src="/images/carousel-2.png"
                        alt=""
                      />
                      <Card.Title className="nama-buyer-halaman">
                        Jam Tangan Casio
                      </Card.Title>
                      <Card.Text className="harga-2-buyer-halaman">
                        Rp 250.000
                      </Card.Text>
                    </Col>
                  </Card>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Harga Tawar</Form.Label>
                    <Form.Control type="text" placeholder="Rp 0,00" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicCheckbox"
                  ></Form.Group>
                </Container>
                <Modal.Body>
                  <Button
                    className="modal-btnPurple-buyer-halaman w-100"
                    type="submit"
                    onClick={handleClose}
                  >
                    <Link
                      to="/buyerhalaman2"
                      className="button-kirim-buyer-halaman text-decoration-none"
                    >
                      Kirim
                    </Link>
                  </Button>
                </Modal.Body>
              </Modal>
            </Card>

            <Card className="card-3-buyer-halaman">
              <div className="mt-3 ">
                <div className="justify-content-start">
                  <div className="flex-container2-buyer-halaman">
                    <div>
                      <img
                        className="img-3-buyer-halaman"
                        src="/images/carousel-2.png"
                        alt=""
                      />
                    </div>
                    <div className="nama-penjual-buyer-halaman">
                      <h6>Nama penjual</h6>
                      <h5 className="kota-2-buyer-halaman">Kota</h5>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        {/* </div> */}
        <div className="desc-buyer-halaman">
          <div className="textShadowBox-buyer-halaman p-4 mt-4 mb-4">
            <Card className="deskipsi-buyer-halaman">
              <h4 style={{ color: "black" }}>Deskripsi</h4>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br /> <br /> Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </div>
            </Card>
          </div>
          <div className="col"></div>
        </div>
      </Container>
    </>
  );
}

export default DetailProduct;
