import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/images/image1.jpg';
import img2 from '../assets/images/image2.jpg';
import img3 from '../assets/images/image3.jpg';
import ScrollProgress from '../components/ScrollProgress'; // Adjust the path if necessary

const Home = () => {
    const imgStyle = {
        height: '550px', // Adjust the height as needed
        objectFit: 'cover',
    };

    return (
        <>
            <ScrollProgress />
            <Carousel>
                <Carousel.Item>
                    <div style={{ position: 'relative' }}>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                            style={imgStyle}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', // White overlay with opacity
                                zIndex: 1,
                            }}
                        />
                        <Carousel.Caption style={{ zIndex: 2 }}>
                            <h3>First Slide Label</h3>
                            <p>Description for the first slide.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ position: 'relative' }}>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                            style={imgStyle}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', // White overlay with opacity
                                zIndex: 1,
                            }}
                        />
                        <Carousel.Caption style={{ zIndex: 2 }}>
                            <h3>Second Slide Label</h3>
                            <p>Description for the second slide.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ position: 'relative' }}>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                            style={imgStyle}
                        />
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(255, 255, 255, 0.5)', // White overlay with opacity
                                zIndex: 1,
                            }}
                        />
                        <Carousel.Caption style={{ zIndex: 2 }}>
                            <h3>Third Slide Label</h3>
                            <p>Description for the third slide.</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Home;
