import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Link} from "react-router-dom";
import SessionHelper from "../../SessionHelper/SessionHelper";

class Policy extends Component {
    constructor() {
        super();
        this.state={
            policy:"",
            loaderDiv:true,
            wentWrong:"d-none",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {

        let SiteInfoPolicy = SessionHelper.getPolicySession();

        if (SiteInfoPolicy==null){
            axios.get(ApiUrl.SendSiteInfo).then(response=>{
                let StatusCode = response.status;
                if (StatusCode==200){
                    let JSONData= (response.data)[0]['ploicy'];
                    this.setState({policy:JSONData,loaderDiv:"d-none",mainDiv:"",wentWrong:"d-none"});
                    SessionHelper.setPolicySession(JSONData);
                }
            }).catch(error=>{
                this.setState({policy:false,loaderDiv:"d-none",mainDiv:"d-none",wentWrong:"text-center"});
            })
        }else {
            this.setState({policy:SiteInfoPolicy,loaderDiv:"d-none",mainDiv:"",wentWrong:"d-none"});
        }

    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection">

                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/policy"}>Policy</Link></Breadcrumb.Item>
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
                                    { ReactHtmlParser(this.state.policy) }
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Policy;