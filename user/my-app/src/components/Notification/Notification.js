import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";

class Notification extends Component {
    constructor() {
        super();
        this.state={
            show:false,
            NotificationData:[],
            isLoading:"",
            mainDiv:"d-none",
            message:"",
            title:"",
            date:"",
        }
    }

    handleClose = () => {
        this.setState({ show:false})
    };
    handleShow = (event) => {
        const message = event.target.getAttribute("data-message");
        const title = event.target.getAttribute("data-title");
        const date = event.target.getAttribute("data-date");
        this.setState({ show:true,message:message,title:title,date:date})
    };

    componentDidMount() {
        axios.get(ApiUrl.NotificationHistory).then(response=>{
            this.setState({NotificationData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    render() {

        const NotificationData = this.state.NotificationData;
        const NotificationView = NotificationData.map((NotificationList,i)=>{
            return(
                <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                    <Card onClick={this.handleShow} className="notification-card">
                        <Card.Body>
                            <h6> {NotificationList.title}</h6>
                            <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: {NotificationList.date} | Status: Unread</p>
                            <Button className="btn btn-primary btn-sm " onClick={this.handleShow} data-message={NotificationList.msg} data-title={NotificationList.title} data-date={NotificationList.date}>Show</Button>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })


        return (
            <Fragment>
                <Container className="TopSection">
                    <Row>
                        {NotificationView}
                    </Row>
                </Container>


                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <h6><i className="fa  fa-bell"></i>   Date: {this.state.date} </h6>
                    </Modal.Header>
                    <Modal.Body>
                        <h6> {this.state.title}</h6>
                        <p>{this.state.message}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>


            </Fragment>
        );
    }
}

export default Notification;