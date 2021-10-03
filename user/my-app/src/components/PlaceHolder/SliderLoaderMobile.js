import React, {Component} from 'react';
import image from '../../assets/images/sliderimagemobile.svg'
import {Col, Container, Row} from "react-bootstrap";
class SliderLoaderMobile extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <div className={isLoading}>
                <Container className="p-0 TopSection overflow-hidden" fluid={true}>
                    <Row>
                        <Col className="p-1" lg={12} md={12} sm={12}>
                            <div  className="container-fluid shadow-sm bg-white">
                                <div className="row">
                                    <div className="col-md-8 col-12 col-sm-12  text-center">
                                        <img alt="" className="slider-img"  src={image}/>
                                        <div className="ph-item">
                                            <div className="ph-col-12">
                                                <div className="ph-row">
                                                    <div className="ph-col-12 small"/>
                                                    <div className="ph-col-12 small"/>
                                                    <div className="ph-col-12 small"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default SliderLoaderMobile;
