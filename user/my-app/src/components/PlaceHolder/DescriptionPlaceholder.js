import React, {Component, Fragment} from 'react';
import { Col, Container, Row} from "react-bootstrap";
class DescriptionPlaceholder extends Component {
    render() {
        let isLoading=this.props.isLoading;
        return (
            <Fragment>
                <Container className={isLoading}>
                    <Row>
                        <Col  md={12} lg={12} sm={12} xs={12}>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>
                            </div>
                            <div className="ph-item">
                                <div className="ph-col-12">
                                    <div className="ph-row">
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                        <div className="ph-col-12"/>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default DescriptionPlaceholder;