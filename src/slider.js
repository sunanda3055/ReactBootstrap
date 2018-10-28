import React from 'react';
import Carousel from "react-bootstrap/es/Carousel";

class Slider extends React.Component{

    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img alt="900x500" className="carousel-own-image" src="/JabongImg/c1.jpg" />
                    <Carousel.Caption>
                        <h3>Diwali Sale</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="900x500" className="carousel-own-image" src="/JabongImg/c2.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="900x500" className="carousel-own-image" src="/JabongImg/c4.jpg" />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="900x500" className="carousel-own-image" src="/JabongImg/c5.jpg" />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slider;