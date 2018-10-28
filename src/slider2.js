import React from 'react';
import Carousel from "react-bootstrap/es/Carousel";

class Slider2 extends React.Component{

    render(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img alt="900x500" src="/JabongImg/c21.png" />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="900x500" src="/JabongImg/c22.png" />
                </Carousel.Item>
                <Carousel.Item>
                    <img alt="900x500" src="/JabongImg/c23.png" />
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slider2