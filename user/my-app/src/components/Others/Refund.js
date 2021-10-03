import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import {Link} from "react-router-dom";
import SessionHelper from "../../SessionHelper/SessionHelper";

class Refund extends Component {
    constructor() {
        super();
        this.state={
            refund:"",
            loaderDiv:true,
            wentWrong:"d-none",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {

        let SiteInfoRefund = SessionHelper.getRefundSession();

        if (SiteInfoRefund==null){
            axios.get(ApiUrl.SendSiteInfo).then(response=>{
                let StatusCode = response.status;
                if (StatusCode==200){
                    let JSONData= (response.data)[0]['terms'];
                    this.setState({refund:JSONData,loaderDiv:"d-none",mainDiv:"",wentWrong:"d-none"});
                    SessionHelper.setRefundSession(JSONData);
                }
            }).catch(error=>{
                this.setState({refund:false,loaderDiv:"d-none",mainDiv:"d-none",wentWrong:"text-center"});
            })
        }else {
            this.setState({refund:SiteInfoRefund,loaderDiv:"d-none",mainDiv:"",wentWrong:"d-none"});
        }

    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection">

                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/refund"}>Refund</Link></Breadcrumb.Item>
                    </Breadcrumb>

                    <Row className="p-2">

                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                            <Card className={this.state.loaderDiv}>
                                <Card.Body>
                                    <div className="ph-item">
                                        <div className="ph-col-12">
                                            <div className="ph-picture"></div>
                                            <div className="ph-row">
                                                <div className="ph-col-6 big"></div>
                                                <div className="ph-col-4 empty big"></div>
                                                <div className="ph-col-2 big"></div>
                                                <div className="ph-col-4"></div>
                                                <div className="ph-col-8 empty"></div>
                                                <div className="ph-col-6"></div>
                                                <div className="ph-col-6 empty"></div>
                                                <div className="ph-col-12"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>


                            <Card className={this.state.wentWrong}>
                                <Card.Body>
                                    <img src="images/wentWrong.png"/>
                                </Card.Body>
                            </Card>


                            <Card className={this.state.mainDiv}>
                                <Card.Body>
                                    { ReactHtmlParser(this.state.refund) }
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Refund;