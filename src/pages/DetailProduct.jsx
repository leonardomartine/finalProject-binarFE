import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import "../css/detailproduct.css";
// import "../css/main.css";
import Navbar from "../components/NavBar";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';


function DetailProduct() {
    return (
      <>
        <div className="bg-nav">
            <Navbar />
        </div>
        {/* <div>
          <Link className="arrow2" to="/" style={{ color: "black" }}>
            <FiArrowLeft />
          </Link>
        </div> */}
        <Container >
        
        {/* <div>  */}
            {/* <div className='d-flexs containers p-0'  > */}
                <div className="flex-container">
                    <div style={{width: "100%"}}>
                    <div className="carousel">
                    <Carousel>
                        
                    <Carousel.Item>
                    <div>
          <Link className="arrow2" to="/" style={{ color: "black" }}>
            <FiArrowLeft />
          </Link>
        
                    <img
                        className="d-block w-100 "
                        src="/images/jam.png" 
                    />
                    </div> 
                    </Carousel.Item>

                    <Carousel.Item>
                    <div>
          <Link className="arrow2" to="/" style={{ color: "black" }}>
            <FiArrowLeft />
          </Link>
        
                    <img
                        className="d-block w-100 "
                        src="/images/jam.png" 
                    />
                    </div> 
                    </Carousel.Item>
                    <Carousel.Item>
                    <div>
          <Link className="arrow2" to="/" style={{ color: "black" }}>
            <FiArrowLeft />
          </Link>
        
                    <img
                        className="d-block w-100 "
                        src="/images/jam.png" 
                    />
                    </div> 
                    </Carousel.Item>
                </Carousel>
                </div>
</div>
                    {/* </div> */}
                 
                    <div style={{   width: "45%", justifyContent : "space-around", marginLeft: "30px" }} className="top-20">
                        <div class="textShadowBox2  w-100  mt-4">
                            <h4>Jam Tangan Casio</h4>
                            <h6>Aksesoris</h6>
                            <h5>Rp 250.000</h5>
                            <Button className="btnPurple w-100 mt-2 mb-2">Terbitkan</Button>
                            <Button
                            className="btnPurple2 w-100 mt-2 "
                            style={{ background: "#FFFFFF", color: "black" }}
                            >
                            Edit
                            </Button>
                        </div>
                    
        
                        <div class="textShadowBox2  mt-4 " >
                            <div className="justify-content-start">
                                <div className="flex-container2">
                                    <div>
                                        <img src="/images/profile.png" />
                                    </div>
                                    <div >
                                        <h5>Nama penjual</h5>
                                        <h5>Kota</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            {/* </div> */}
                    <div className="desc">
                        <div className="textShadowBox p-4 mt-4 mb-4">
                            <h4>Deskripsi</h4>
                            <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                            nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    
                    <div className='col'>

                </div>
            
            </div>
        {/* </div>     */}
            {/* <div class="row mt-3">
                <div class="col-lg-4">
                <Carousel>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/jam.png" 
                        alt="First slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/jam.png" 
                        alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="/images/jam.png" 
                        alt="Third slide"
                    />
                    </Carousel.Item>
                </Carousel>
                </div>

                <div class="col-lg-3">
                    <div class="textShadowBox p-4">
                        <h4>Jam Tangan Casio</h4>
                        <h6>Aksesoris</h6>
                        <h5>Rp 250.000</h5>
                        <Button className="btnPurple w-100 mt-2 mb-2">Terbitkan</Button>
                        <Button
                        className="btnPurple w-100 mt-2 "
                        style={{ background: "#FFFFFF", color: "black" }}
                        >
                        Edit
                        </Button>
                    </div>
                
    
                    <div class="textShadowBox p-4 mt-4">
                        <div className="row justify-content-start">
                            <div className="col-1">
                                <img src="/images/profile.png" />
                            </div>
                            <div className="col-8">
                                <h5>Nama penjual</h5>
                                <h6>Kota</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-4">
                <div className="textShadowBox p-4 mt-4 mb-4">
                    <h4>Deskripsi</h4>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
                </div>
      </div>  */}
        </Container>
        
      </>
    );
  }
  
  export default DetailProduct;

