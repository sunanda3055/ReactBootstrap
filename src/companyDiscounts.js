import React from 'react';
import {Thumbnail,Image, Row, Col, Grid} from "react-bootstrap";

class ComapnyDiscounts extends React.Component{

    render(){
        return(
            <div className="discount-container">
                <Grid>
                    <Row>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="/JabongImg/b1.jpg" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="/JabongImg/b2.jpg" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="/JabongImg/b3.jpg" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="/JabongImg/b4.jpg" /></a>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="/JabongImg/b5.jpg" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="/JabongImg/b6.jpg" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="/JabongImg/b7.jpg" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="/JabongImg/b8.jpg" /></a>
                        </Col>
                    </Row>

                    <div className="separator-bg">
                        <Row>
                            <Col xs={12} md={12}>
                                <Image href="#" alt="171x180" src="/JabongImg/g1.gif" />
                            </Col>
                        </Row>
                    </div>

                    <Row>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/HERE_NOW_1540372084435.webp" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/UCB_1540301045148.webp" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/DP_1540301115596.webp" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/Mast-_-Harbour_1540301198233.webp" /></a>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/Skechers_1540301244070.webp" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/Allaboutyou_1540372215358.webp" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/BIBA_1540331507805.webp" /></a>
                        </Col>
                        <Col xs={3} md={3}>
                            <a href='#'><Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/Varanga_1540301488364.webp" /></a>
                        </Col>
                    </Row>

                    <div className="separator-bg">
                        <Row>
                            <Col xs={12} md={12}>
                                <Image href="#" alt="171x180" src="/JabongImg/g1.gif" />
                            </Col>
                        </Row>
                    </div>

                    <div className="separator-bg">
                        <Row>
                            <Col xs={12} md={12}>
                                <a href='#'>
                                    <Image href="#" alt="171x180" src="https://static.jabong.com/cms/new-site/Exploremore_1540312414349.webp" />
                                </a>
                            </Col>
                        </Row>
                    </div>

                </Grid>
            </div>
        )
    }
}

export default ComapnyDiscounts;