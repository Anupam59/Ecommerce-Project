import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Validation from "../../validation/Validation";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Contact extends Component {

    constructor() {
        super();
        this.state={
            name:"",
            mobile:"",
            message:""
        }
    }

    nameOnChang=(event)=>{
        let name= event.target.value;
        this.setState({name:name})
    }
    mobileOnChang=(event)=>{
        let mobile= event.target.value;
        this.setState({mobile:mobile})
    }
    messageOnChang=(event)=>{
        let message= event.target.value;
        this.setState({message:message})
    }
    onFormSubmit=(event)=>{
        let name=this.state.name;
        let mobile=this.state.mobile;
        let message=this.state.message;
        let sendBtn=document.getElementById('sendBtn');
        let contactForm=document.getElementById('contactForm');

        if(name.length==0){
            toast.warn("Plz write your Name")
        }
        else if(mobile.length==0){
            toast.warn("Plz write your Mobile Number")
        }
        else if(!(Validation.NameRegx).test(name)){
            toast.warn("Invalid Name")
        }
        else if(!(Validation.MobileRegx).test(mobile)){
            toast.warn("Invalid Mobile Number")
        }
        else if(message.length==0){
            toast.warn("Plz write your Message")
        }
        else {
            sendBtn.innerHTML="Sending...";
            let MyFormData = new FormData();
            MyFormData.append("name",name);
            MyFormData.append("mobile",mobile);
            MyFormData.append("message",message);

            axios.post(ApiUrl.SendContactDetails,MyFormData).then(function (response){
                if (response.status==200 && response.data==1){
                    toast.success("Request Success")
                    sendBtn.innerHTML="Send";
                    contactForm.reset();
                }
                else {
                    toast.error("error")
                    sendBtn.innerHTML="Send";
                }
            }).catch(function (error){
                toast.error("error")
                sendBtn.innerHTML="Send";
            });
        }
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form id="contactForm" onSubmit={this.onFormSubmit} className=" onboardForm">
                                        <h4 className="section-title">CONTACT WITH US</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.nameOnChang} className="form-control m-2" type="text" placeholder="Your Name"/>
                                        <input onChange={this.mobileOnChang} className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input onChange={this.messageOnChang} className="form-control m-2" type="text" placeholder="Message"/>
                                        <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn">SEND</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <iframe className="GoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8459.260146074752!2d91.86644235374557!3d24.958640219141326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3750544ad735bb4d%3A0x60a4e8497fb273a0!2sOsmani%20International%20Airport%2C%20Sylhet!5e1!3m2!1sen!2sbd!4v1622571585641!5m2!1sen!2sbd"></iframe>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <ToastContainer />
                </Container>
            </Fragment>
        );
    }
}

export default Contact;