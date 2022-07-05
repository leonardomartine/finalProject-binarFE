import React from "react";
import "../css/daftarJual.css";
import { Card, Container } from "react-bootstrap";
import { Link, } from "react-router-dom";
import { FiPlus } from "react-icons/fi";

export default function CardProduct({ product }) {

  const title = {
    fontSize: "16px",
  };

  const image = {
    width: "91%",
    height: "100px",
    objectFit: "cover",
    margin: "8px",
    borderRadius: "5px",
  };

  const accesoris = {
    fontSize: "12px",
    opacity: "0.5",
  };

  const productCard = {
    width: "200px",
    height: "200px",
  };

  const styleLink = {
    textDecoration: "none",
  }

  console.log(product);
  return (
    <>
      <Container className="card-content-seller">
        <Link style={styleLink} to="/InfoProduct">
          <Card style={productCard} className="add-product d-flex align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
              <FiPlus className="add-product-icon" />
            </div>
            <p className="add-product-text">
              Tambah Produk
            </p>
          </Card>
        </Link>

        <Card style={productCard}>
          <Card.Img
            className="w-80 align-self-center"
            variant="top"
            multiple
            src="/images/img.png"
            style={image}
          />
          <Card.Body className="p-2">
            <Card.Title className="mb-0" style={title}>
              nama
            </Card.Title>
            <p className="mb-0" style={accesoris}>
              mobil
            </p>
            <Card.Text className="mb-1">20.000</Card.Text>
          </Card.Body>
        </Card>

        <Card style={productCard}>
          <Card.Img
            className="w-80 align-self-center"
            variant="top"
            multiple
            src="/images/carousel-2.png"
            style={image}
          />
          <Card.Body className="p-2">
            <Card.Title className="mb-0" style={title}>
              nama
            </Card.Title>
            <p className="mb-0" style={accesoris}>
              mobil
            </p>
            <Card.Text className="mb-1">20.000</Card.Text>
          </Card.Body>
        </Card>

        <Card style={productCard}>
          <Card.Img
            className="w-80 align-self-center"
            variant="top"
            multiple
            src="/images/carousel-2.png"
            style={image}
          />
          <Card.Body className="p-2">
            <Card.Title className="mb-0" style={title}>
              nama
            </Card.Title>
            <p className="mb-0" style={accesoris}>
              mobil
            </p>
            <Card.Text className="mb-1">20.000</Card.Text>
          </Card.Body>
        </Card>
        <Card style={productCard}>
          <Card.Img
            className="w-80 align-self-center"
            variant="top"
            multiple
            src="/images/carousel-2.png"
            style={image}
          />
          <Card.Body className="p-2">
            <Card.Title className="mb-0" style={title}>
              nama
            </Card.Title>
            <p className="mb-0" style={accesoris}>
              mobil
            </p>
            <Card.Text className="mb-1">20.000</Card.Text>
          </Card.Body>
        </Card>


      </Container>
    </>
  );
}