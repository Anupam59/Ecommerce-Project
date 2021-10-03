import React, {Component,Fragment} from 'react';
import UserImage from '../../assets/images/UserImage.JPG'
import {Button, Col, Container, Image, Row, Modal, Form} from "react-bootstrap";
import SessionHelper from "../../SessionHelper/SessionHelper";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import cogoToast from "cogo-toast";

class UserProfile extends Component {

    constructor() {
        super();
        this.state={
            Number:SessionHelper.getUserMobileSession(),
            name:"",
            mobile_number:"",
            email:"",
            password:"",
            address:"",
            updateModal:false
        }
    }
    componentDidMount() {
        axios.get(ApiUrl.GetUserData(this.state.Number)).then(response=>{
            let StatusCode = response.status;
            if (StatusCode==200){
                let JSONData= (response.data)[0];
                this.setState({
                    name:JSONData['name'],
                    mobile_number:JSONData['mobile_number'],
                    email:JSONData['email'],
                    password:JSONData['password'],
                    address:JSONData['address'],
                });
            }
        }).catch(error=>{

        })
    }

    updateBtnOpen=()=>{this.setState({updateModal:true})}
    updateBtnClose=()=>{this.setState({updateModal:false})}


    OnNameChange=(value)=>{this.setState({name:value})}
    OnEmailChange=(value)=>{this.setState({email:value})}
    OnPasswordChange=(value)=>{this.setState({password:value})}
    OnAddressChange=(value)=>{this.setState({address:value})}








    UserProfileUpdate=()=>{


            axios.post(ApiUrl.UserProfileUpdate,{
                name:this.state.name,
                mobile_number:this.state.mobile_number,
                email:this.state.email,
                password:this.state.password,
                address:this.state.address,
            }).then((response)=>{
                if (response.status==200){
                    cogoToast.success("Update Success",{position:"top-center"});
                    this.componentDidMount();
                    this.setState({updateModal:false})
                }else {
                    cogoToast.error("Update Fail",{position:"top-center"});
                    this.setState({updateModal:false})
                }
            }).catch((error)=>{
                cogoToast.error("Update Fail",{position:"top-center"});
                this.setState({updateModal:false})
            });
    }





    render() {
        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        <Col md={8} lg={8} sm={12} xs={12}>
                            <div className="mt-4">
                                <hr/>
                                <hr/>
                                <h4>Name : {this.state.name}</h4>
                                <h4>Number : {this.state.mobile_number}</h4>
                                <h4>Email : {this.state.email}</h4>
                                <h4>Address : {this.state.address}</h4>
                            </div>
                            <hr/>
                            <hr/>
                            <Button onClick={this.updateBtnOpen}>Update Your Profile</Button>
                        </Col>
                    </Row>
                </Container>


                <Modal size="lg" show={this.state.updateModal} onHide={this.updateBtnClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={e => this.OnNameChange(e.target.value)} placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Number</Form.Label>
                                <Form.Control type="text" value={this.state.mobile_number} placeholder="Number" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" value={this.state.email} onChange={e => this.OnEmailChange(e.target.value)} placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" value={this.state.password} onChange={e => this.OnPasswordChange(e.target.value)} placeholder="password" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" value={this.state.address} onChange={e => this.OnAddressChange(e.target.value)} placeholder="Address" />
                            </Form.Group>

                        </Form>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.updateBtnClose}>
                            Close
                        </Button>
                        <Button onClick={this.UserProfileUpdate} variant="primary">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Fragment>
        );
    }
}

export default UserProfile;