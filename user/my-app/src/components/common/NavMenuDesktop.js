import React, {Component,Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Redirect} from "react-router";
import SessionHelper from "../../SessionHelper/SessionHelper";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import {toast} from "react-toastify";

class NavMenuDesktop extends Component {

    constructor() {
        super();
        this.state={
            SearchKey:"",
            SearchRedirectStatus:false,
            HomeRedirectStatus:false,
            cartCount:0,
            FavouriteCount:0,
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.CartCount(SessionHelper.getUserMobileSession())).then(response=>{
            this.setState({cartCount:response.data})
        }).catch(error=>{

        });

        axios.get(ApiUrl.FavouriteCount(SessionHelper.getUserMobileSession())).then(response=>{
            this.setState({FavouriteCount:response.data})
        }).catch(error=>{

        });
    }

    SearchOnChange=(event)=>{
        let SearchKey = event.target.value;
        this.setState({SearchKey:SearchKey})
    }
    SearchOnClick=()=>{
        let SearchKey = this.state.SearchKey;
        if (SearchKey.length>=2){
            this.setState({SearchRedirectStatus:true})
        }
    }
    SearchRedirect=()=>{
        if (this.state.SearchRedirectStatus===true){
            return <Redirect to={"/ProductBySearch/"+this.state.SearchKey}/>
        }
    }


    UserLogout=()=>{
        SessionHelper.getRemoveMobileSession();
        if (SessionHelper.getUserMobileSession()===null){
            this.setState({HomeRedirectStatus:true})
        }
    }

    HomeRedirect=()=>{
        if (this.state.HomeRedirectStatus===true){
            return(
                <Redirect to={"/"}/>
            )
        }
    }

    render() {

        if (SessionHelper.getUserMobileSession()===null){
            return (
                <Fragment>
                    <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                        <Row>
                            <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                                <Link to="/" className="btn"> <img className="nav-logo" src="images/logo.png"/></Link>
                                <Link to="/cart" className="btn"><i className="fa fa-shopping-cart"></i> <span className="cart-btn"> {this.state.cartCount} items</span></Link>

                            </Col>
                            <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input onChange={this.SearchOnChange} type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                                    <button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                                </div>
                            </Col>
                            <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger"> {this.state.FavouriteCount}</span></sup></Link>
                                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger"> 4</span></sup></Link>
                                <Link to="/orderList" className="btn"><i className="fa h4 fa-mobile-alt"></i> </Link>
                                <Link to="/userProfile" className="btn"><i className="fas fa-user"></i> </Link>
                                <Link to="/onboard" className="h4 btn">LOGIN</Link>
                            </Col>
                        </Row>

                        {this.SearchRedirect()}
                        {this.HomeRedirect()}

                    </Container>
                </Fragment>
            );
        }else {
            return (
                <Fragment>
                    <Container fluid={"true"} className="fixed-top shadow-sm p-2 m-0 bg-white">
                        <Row>
                            <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                                <Link to="/" className="btn"> <img className="nav-logo" src="images/logo.png"/></Link>
                                <Link to="/cart"><Button className="cart-btn"><i className="fa fa-shopping-cart"></i> {this.state.cartCount} items </Button></Link>
                            </Col>
                            <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                                <div className="input-group w-100">
                                    <input onChange={this.SearchOnChange} type="text" className="form-control" aria-label="Text input with segmented dropdown button"/>
                                    <button onClick={this.SearchOnClick} type="button" className="btn site-btn"><i className="fa fa-search"></i></button>
                                </div>
                            </Col>
                            <Col className="p-1" lg={4} md={4} sm={12} xs={12}>
                                <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i>  <sup><span className="badge text-white bg-danger"> {this.state.FavouriteCount}</span></sup></Link>
                                <Link to="/notification" className="btn"><i className="fa h4  fa-bell"></i> <sup><span className="badge text-white bg-danger"> 4</span></sup></Link>
                                <Link to="/orderList" className="btn"><i className="fa h4 fa-mobile-alt"></i> </Link>
                                <Link to="/userProfile" className="btn"><i className="fa h4 fa-user"></i> </Link>
                                <button onClick={this.UserLogout} className="h4 btn">Logout</button>
                            </Col>
                        </Row>

                        {this.SearchRedirect()}
                        {this.HomeRedirect()}
                    </Container>
                </Fragment>
            );
        }

    }
}

export default NavMenuDesktop;