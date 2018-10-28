import React from 'react';
import Slider from './slider';
import Aside from './aside';
import Slider2 from './slider2';
import JHead from './jHead';
import Offerbody from './companyDiscounts';
import JFoot from './jFoot';
import {Grid,Row,Col} from "react-bootstrap";
import './style.css';

class App extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div>

                <JHead/>

                <div className="container">
                    <div className='grid-container'>
                        <Grid>
                            <Row className="show-grid">
                                <Col xs={6} md={8}>
                                    <code>
                                        <Slider/>
                                    </code>
                                </Col>

                                <Col xs={6} md={4}>
                                    <code>
                                        <Aside/>
                                    </code>
                                </Col>
                            </Row>
                        </Grid>
                    </div>

                    <div className='slider-advertise'>
                        <Slider2/>
                    </div>

                    <Offerbody/>

                </div>

            <JFoot/>

            </div>
        )
    }
}

export default App;