import "../css/main.css";
import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FiSearch } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import Navbar from "../components/NavBar";
import CardProduct from "../components/Card";
import axios from "axios";

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState("")
    const [user, setUser] = useState({});

    useEffect(() => {
        // Function validasi user
        const validateLogin = async () => {
            try {
                const token = localStorage.getItem("token");

                const currentUserRequest = await axios.get(
                    "http://localhost:8888/auth/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                const currentUserResponse = currentUserRequest.data;

                if (currentUserResponse.status) {
                    setUser(currentUserResponse.data.user);
                }
            } catch (err) {
                setIsLoggedIn(false);
            }
        };


        validateLogin();
    }, []);

    // const state = {
    //     responsiveClass: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             nav: true
    //         },
    //         600: {
    //             items: 3,
    //             nav: false
    //         },
    //         1000: {
    //             items: 5,
    //             nav: true,
    //             loop: false
    //         }
    //     }
    // }
    const categories = category ? `&category=${category}` : ""
    const getProductPublish = async () => {
        try {
            const dataProduct = await axios.get(
                `http://localhost:8888/api/filter?sold=false&isPublish=true${categories}`
            )

            const payloadData = await dataProduct.data.data.filteredProduct;
            setProduct(payloadData)
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(()=>{
        getProductPublish()
    }, [categories])

    return (
        <>
            <div className="bg-nav">
                <Navbar />
            </div>

            <div className="slider">
                <OwlCarousel
                    className="owl-theme slider-items"
                    items={2}
                    autoplay={true}
                    autoplayTimeout={5000}
                    autoplayHoverPause={true}
                    center
                    loop
                    margin={10}
                    nav

                // responsive={state.responsive}
                >
                    <div className="slider-card ">
                        <Card className="card-content home-carousel-1">
                            <Row>
                                <Col xs={8} md={6} className="carousel-text">
                                    <p className="text-1">Bulan Ramadhan Banyak diskon!</p>
                                    <p className="text-2">Diskon Hingga</p>
                                    <p className="text-3">60%</p>
                                </Col>
                                <Col xs={4} md={2} className="carousel-1">
                                    <img src="/images/carousel-1.png" alt="" />
                                </Col>
                                <Col xs={6} md={4} className="carousel-2">
                                    <img src="/images/carousel-2.png" alt="" />
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className="slider-card second-slide slider-2">
                        <Card className="card-content home-carousel-2">
                            <Row>
                                <Col xs={8} md={6} className="carousel-text">
                                    <p className="text-1">Bulan Ramadhan Banyak diskon!</p>
                                    <p className="text-2">Diskon Hingga</p>
                                    <p className="text-3">60%</p>
                                </Col>
                                <Col xs={4} md={2} className="carousel-1">
                                    <img src="/images/carousel-1.png" alt="" />
                                </Col>
                                <Col xs={6} md={4} className="carousel-2">
                                    <img src="/images/carousel-3.png" alt="" />
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div className="slider-card third-slide slider-2">
                        <Card className="card-content home-carousel-3">
                            <Row>
                                <Col xs={8} md={6} className="carousel-text">
                                    <p className="text-1">Bulan Ramadhan Banyak diskon!</p>
                                    <p className="text-2">Diskon Hingga</p>
                                    <p className="text-3">60%</p>
                                </Col>
                                <Col xs={4} md={2} className="carousel-1">
                                    <img src="/images/carousel-1.png" alt="" />
                                </Col>
                                <Col xs={6} md={4} className="carousel-2">
                                    <img src="/images/carousel-4.png" alt="" />
                                </Col>
                            </Row>
                        </Card>
                    </div>
                </OwlCarousel>
            </div>

            <Container className="category">
                <h6 className="fw-bold">Telusuri Kategori</h6>
                <div>
                    <div className="d-flex gap-3 button-category">
                        <Button className="d-flex gap-1 px-3" variant="primary" onClick={()=> setCategory(null)}>
                            <FiSearch className="align-self-center" /> Semua
                        </Button>
                        <Button className="d-flex gap-1 px-3" variant="primary" onClick={()=> setCategory("hobi")}>
                            <FiSearch className="align-self-center" /> Hobi
                        </Button>
                        <Button className="d-flex gap-1 px-3" variant="primary" onClick={()=> setCategory("kendaraan")}>
                            <FiSearch className="align-self-center" /> Kendaraan
                        </Button>
                        <Button className="d-flex gap-1 px-3" variant="primary" onClick={()=> setCategory("Baju")}>
                            <FiSearch className="align-self-center" /> Baju
                        </Button>
                        <Button className="d-flex gap-1 px-3" variant="primary" onClick={()=> setCategory("Elektronik")}>
                            <FiSearch className="align-self-center" /> Elektronik
                        </Button>
                        <Button className="d-flex gap-1 px-3" variant="primary" onClick={()=> setCategory("kesehatan")}>
                            <FiSearch className="align-self-center" /> Kesehatan
                        </Button>
                    </div>

                    {isLoggedIn ? (
                        <Link to={`/about/${user.id}`} className="text-decoration-none">
                            <Button className="d-flex gap-2 px-3 py-2 fixed-bottom button-sell mb-4">
                                <BsPlus
                                    className="align-self-center "
                                    style={{ fontSize: "24px" }}
                                />{" "}
                                Jual
                            </Button>
                        </Link>
                    ) : (
                        <Link to="/login" className="text-decoration-none">
                            <Button className="d-flex gap-2 px-3 py-2 fixed-bottom button-sell mb-4">
                                <BsPlus
                                    className="align-self-center "
                                    style={{ fontSize: "24px" }}
                                />{" "}
                                Jual
                            </Button>
                        </Link>
                    )}
                </div>

            </Container>

            <div>
                <CardProduct product= {product} />
            </div>
        </>
    );
}
