import "../css/main.css";
import React from "react";
import { Card, Container } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";

export default function CardProduct() { 
    const title = { 
      fontSize: "14px", 
    }; 
   
    const image = { 
      width: "91%", 
      margin: "8px", 
    }; 
   
    const accesoris = { 
      fontSize: "11px", 
      opacity: "0.5", 
    }; 
    return ( 
      <Container className="card-content"> 
        <div> 
          <Card> 
            <Card.Img variant="top" src="/images/home-carousel-1.png" style={image} /> 
            <Card.Body className="p-2"> 
              <Card.Title className="mb-0" style={title}> 
                Jam Tangan Casio 
              </Card.Title> 
              <p className="mb-0" style={accesoris}> 
                Aksesoris 
              </p> 
              <Card.Text className="mb-1">Rp 250.000</Card.Text> 
            </Card.Body> 
          </Card> 
        </div> 
        <div> 
          <Card> 
            <Card.Img variant="top" src="/images/home-carousel-1.png" style={image} /> 
            <Card.Body className="p-2"> 
              <Card.Title className="mb-0" style={title}> 
                Jam Tangan Casio 
              </Card.Title> 
              <p className="mb-0" style={accesoris}> 
                Aksesoris 
              </p> 
              <Card.Text className="mb-1">Rp 250.000</Card.Text> 
            </Card.Body> 
          </Card> 
        </div> 
        <div> 
          <Card> 
            <Card.Img variant="top" src="/images/home-carousel-1.png" style={image} /> 
            <Card.Body className="p-2"> 
              <Card.Title className="mb-0" style={title}> 
                Jam Tangan Casio 
              </Card.Title> 
              <p className="mb-0" style={accesoris}> 
                Aksesoris 
              </p> 
              <Card.Text className="mb-1">Rp 250.000</Card.Text> 
            </Card.Body> 
          </Card> 
        </div> 
        <div> 
          <Card> 
            <Card.Img variant="top" src="/images/home-carousel-1.png" style={image} /> 
            <Card.Body className="p-2"> 
              <Card.Title className="mb-0" style={title}> 
                Jam Tangan Casio 
              </Card.Title> 
              <p className="mb-0" style={accesoris}> 
                Aksesoris 
              </p> 
              <Card.Text className="mb-1">Rp 250.000</Card.Text> 
            </Card.Body> 
          </Card> 
        </div> 
        <div> 
          <Card> 
            <Card.Img variant="top" src="/images/home-carousel-1.png" style={image} /> 
            <Card.Body className="p-2"> 
              <Card.Title className="mb-0" style={title}> 
                Jam Tangan Casio 
              </Card.Title> 
              <p className="mb-0" style={accesoris}> 
                Aksesoris 
              </p> 
              <Card.Text className="mb-1">Rp 250.000</Card.Text> 
            </Card.Body> 
          </Card> 
        </div> 
        <div> 
          <Card> 
            <Card.Img variant="top" src="/images/home-carousel-1.png" style={image} /> 
            <Card.Body className="p-2"> 
              <Card.Title className="mb-0" style={title}> 
                Jam Tangan Casio 
              </Card.Title> 
              <p className="mb-0" style={accesoris}> 
                Aksesoris 
              </p> 
              <Card.Text className="mb-1">Rp 250.000</Card.Text> 
            </Card.Body> 
          </Card> 
        </div> 
      </Container> 
    ); 
  }