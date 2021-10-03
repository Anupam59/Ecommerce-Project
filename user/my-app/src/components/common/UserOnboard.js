import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import {Redirect} from "react-router";
import {toast, ToastContainer} from "react-toastify";
import Validation from "../../validation/Validation";
import SessionHelper from "../../SessionHelper/SessionHelper";

class UserOnboard extends Component {

    constructor() {
        super();
        this.state={
            mobile_number:"",
            password:"",
            UserRedirect:false,
        }

    }

    componentDidMount() {

    }
    onUserRedirect(){
        if(this.state.UserRedirect===true){
            let winPath=SessionHelper.getRedirectFromDetails();
            if(winPath===null){
                return(<Redirect to="/"/>)
            }
            else {
                return(<Redirect to={winPath}/>)
            }
        }
    }

    MobileOnChange=(event)=>{
        let Mobile = event.target.value;
        this.setState({mobile_number:Mobile})
    }
    PasswordOnChange=(event)=>{
        let Password = event.target.value;
        this.setState({password:Password})
    }
    LoginOnClick=()=>{
        let Mobile = this.state.mobile_number;
        let Password = this.state.password;
        if(Mobile.length==0){
            toast.warn("Plz write your Mobile Number")
        }
        else if(!(Validation.MobileRegx).test(Mobile)){
            toast.warn("Invalid Mobile Number")
        }
        else if(Password.length==0){
            toast.warn("Plz write your Password")
        }
        else if(!(Validation.PasswordRegx).test(Password)){
            toast.warn("Minimum eight characters, at least one letter and one number:")
        }else {
            axios.get(ApiUrl.UserLogin(Mobile,Password)).then(response=>{
                if (response.status==200 && response.data=="1"){
                    toast.success("Success full login");
                    SessionHelper.setUserMobileSession(Mobile);
                    this.setState({UserRedirect:true});
                }else {
                    toast.error("Request Fail ! try Again")
                }
            }).catch(error=>{
                toast.error("Request Fail ! try Again")
            })
        }
    }


    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row className="p-2">
                        <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                            <Row className="text-center ">
                                <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                    <Form className=" onboardForm">
                                        <h4 className="section-title">USER SING IN</h4>
                                        <h6 className="section-sub-title">Please Enter Your Mobile No, And Go Next</h6>
                                        <input onChange={this.MobileOnChange} className="form-control m-2" type="text" placeholder="Mobile Number"/>
                                        <input onChange={this.PasswordOnChange} className="form-control m-2" type="password" placeholder="Password"/>
                                        <Button onClick={this.LoginOnClick} className="btn btn-block m-2 site-btn">Next</Button>
                                    </Form>
                                </Col>
                                <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                    <img className="onboardBanner" src="Images/otppagebanner.png"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    {this.onUserRedirect()}
                </Container>
                <ToastContainer />
            </Fragment>
        );
    }
}

export default UserOnboard;