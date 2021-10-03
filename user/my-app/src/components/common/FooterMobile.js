import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


class FooterMobile extends Component {

    constructor() {
        super();
        this.state={
            footerData:"",
            loaderDiv:true,
            wentWrong:"d-none",
            mainDiv:"d-none",

            facebookLink:"",
            instagramLink:"",
            twitterLink:"",
            address:"",
            deliveryNotice:""
        }
    }

    componentDidMount() {
        let SiteInfoFooter = sessionStorage.getItem("SiteInfoFooter");
        if (SiteInfoFooter==null){
            axios.get(ApiUrl.SendSiteInfo).then(response=>{
                let StatusCode = response.status;
                if (StatusCode==200){
                    let JSONData= (response.data)[0];
                    this.setState({
                        footerData:JSONData,
                        loaderDiv:"d-none",
                        mainDiv:"",
                        wentWrong:"d-none",

                        facebookLink:JSONData['facebook_link'],
                        instagramLink:JSONData['instagram_link'],
                        twitterLink:JSONData['twitter_link'],
                        address:JSONData['address'],
                        deliveryNotice:JSONData['delivery_notice']

                    });
                    sessionStorage.setItem("SiteInfoFooter",JSON.stringify(JSONData));
                }
            }).catch(error=>{
                this.setState({footerData:false,loaderDiv:"d-none",mainDiv:"d-none",wentWrong:"text-center"});
            })
        }else {
            let FooterDataJSON = JSON.parse(SiteInfoFooter);
            this.setState({
                footerData:SiteInfoFooter,
                loaderDiv:"d-none",
                mainDiv:"",
                wentWrong:"d-none",

                facebookLink:FooterDataJSON['facebook_link'],
                instagramLink:FooterDataJSON['instagram_link'],
                twitterLink:FooterDataJSON['twitter_link'],
                address:FooterDataJSON['address'],
                deliveryNotice:FooterDataJSON['delivery_notice']
            });
        }

    }

    render() {
        return (
            <div className="m-0 bg-white mt-5 pt-1 shadow-sm">

                <div className={this.state.loaderDiv}>
                    <div className="ph-item">
                        <div className="ph-col-12">
                            <div className="ph-row">
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                                <div className="ph-col-12"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={this.state.wentWrong}>
                    <img className="w-25" src="images/wentWrong.png"/>
                </div>

                <div className={this.state.mainDiv}>
                    <Container>
                        <Row className="px-0 my-5">
                            <Col sm={6} xs={6}>
                                <h5 className="footer-menu-title mt-3">OFFICE ADDRESS</h5>
                                { ReactHtmlParser(this.state.address) }
                                <br/>
                                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                                <a target="_blank" href={this.state.facebookLink}><i className="fab m-1 h4 fa-facebook"></i></a>
                                <a target="_blank" href={this.state.instagramLink}><i className="fab m-1 h4 fa-instagram"></i></a>
                                <a target="_blank" href={this.state.twitterLink}><i className="fab m-1 h4 fa-twitter"></i></a>

                                <p className="mt-3">Change Language</p>
                                <div id="google_translate_element" className="mt-1"></div>
                            </Col>

                            <Col sm={6} xs={6}>
                                <h5 className="footer-menu-title mt-3">THE COMPANY</h5>
                                <Link to="/about" className="footer-link">About Us</Link><br/>
                                <Link to="/contact" className="footer-link">Contact Us</Link><br/>
                                <a className="footer-link">Our Team</a><br/>
                                <h5 className="footer-menu-title mt-3">MORE INFO</h5>
                                <Link to="/purchase" className="footer-link">How To Purchase</Link><br/>
                                <Link to="/policy" className="footer-link">Privacy Policy</Link><br/>
                                <Link to="/refund" className="footer-link">Refund Policy</Link><br/>
                            </Col>
                        </Row>

                    </Container>
                    <Container fluid={true} className=" m-0 pt-3 pb-1 bg-dark">
                        <Container className="">
                            <Row className="px-0">
                                <h6 className="text-white">WE DELIVER IN</h6>
                                { ReactHtmlParser(this.state.deliveryNotice) }
                            </Row>
                        </Container>
                    </Container>
                </div>

            </div>
        );
    }
}

export default FooterMobile;