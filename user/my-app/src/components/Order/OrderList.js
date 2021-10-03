import React, {Component,Fragment} from 'react';
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import SessionHelper from "../../SessionHelper/SessionHelper";
import {Breadcrumb, Col, Container, Modal, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import DescriptionPlaceholder from "../PlaceHolder/DescriptionPlaceholder";
import {Redirect} from "react-router";
import cogoToast from "cogo-toast";

class OrderList extends Component {

    constructor() {
        super();
        this.state={
            ProductData:[],
            isLoading:"",
            MainDiv:"d-none",
            PageRefreshStatus:false,
            ReviewModal:false,
            code:"",
            name:"",
            rating:"",
            comments:"",
            product_name:""
        }
    }

    componentDidMount() {
        window.scroll(0,0)
        axios.get(ApiUrl.OrderListByUser(SessionHelper.getUserMobileSession())).then((response)=> {
            this.setState({ProductData:response.data,isLoading:"d-none",MainDiv:" "})
        }).catch((error)=>{

        })
    }


    ReviewModalOpen=(code,product_name)=>{
        this.setState({  ReviewModal:true,code:code,product_name:product_name})
    }
    ReviewModalClose=()=>{
        this.setState({  ReviewModal:false})
    }


    PageRefresh=()=>{
        if(this.state.PageRefreshStatus===true){
            let URL=window.location;
            return(
                <Redirect to={URL}/>
            )
        }
    }

    CommentsOnChange=(event)=>{
        let  Comments= event.target.value;
        this.setState({comments:Comments})

    }
    RatingOnChange=(event)=>{
        let  Rating= event.target.value;
        this.setState({rating:Rating})
    }
    nameOnChange=(event)=>{
        let  name= event.target.value;
        this.setState({name:name})
    }

    PostReview=()=>{
        let  code=this.state.code;
        let  name=this.state.name;
        let  rating=this.state.rating;
        let  comments=this.state.comments;
        let  product_name=this.state.product_name;
        let  mobile=SessionHelper.getUserMobileSession();

        if(name.length===0){
            cogoToast.error("Name required",{position:'top-center'})
        }
        else if(rating.length===0){
            cogoToast.error("Select rating point",{position:'top-center'})
        }
        else if(comments.length===0){
            cogoToast.error("Comments required",{position:'top-center'})
        }
        else if(comments.length>150){
            cogoToast.error("Comments can't more than 150 character",{position:'top-center'})
        }
        else {
            let MyFromData=new FormData();
            MyFromData.append('product_name',product_name)
            MyFromData.append('product_code',code)
            MyFromData.append('mobile',mobile)
            MyFromData.append('reviewer_photo',"")
            MyFromData.append('reviewer_name',name)
            MyFromData.append('reviewer_rating',rating)
            MyFromData.append('reviewer_comments',comments)

            axios.post(ApiUrl.PostReview,MyFromData).then((res)=>{
                if(res.data===1){
                    cogoToast.success("Review submitted",{position:'top-center'})
                    this.ReviewModalClose();
                }
                else {
                    cogoToast.error("Request Fail ! Try Again",{position:'top-center'})
                }

            }).catch((err)=>{
                cogoToast.error("Request Fail ! Try Again",{position:'top-center'})
            })
        }

    }


    render() {
        const MyList=this.state.ProductData;
        const MyView=MyList.map((ProductList,i)=>{
            return(
                <>
                    <Col className=" d-flex justify-content-around p-1" md={12} lg={12} sm={12} xs={12}>

                        <div className="float-left w-75">
                            <Link to={"/productDetails/"+ProductList.product_code}>
                            <h5 className="product-name-on-card">{(ProductList.product_name).substring(0,50) }</h5>
                            <h5 className="product-price-on-card">Total Price:{ProductList.total_price}TK</h5>
                            <h5 className="product-name-on-card">{(ProductList.product_info)}</h5>
                            <h5 className="product-price-on-card">Quantity:{ ProductList.product_quantity}</h5>
                            <h5 className="product-price-on-card"> Status: {ProductList.order_status}</h5>
                            </Link>
                        </div>

                        <div className="float-right px-2 w-25">
                            <button  onClick={this.ReviewModalOpen.bind(this,ProductList.product_code,ProductList.product_name)} className="btn btn-sm site-btn">Review</button>
                        </div>
                    </Col>
                    <hr className="bg-light w-100"/>
                </>
            )
        })

        return (
            <Fragment>

                <Container  className={this.state.isLoading+" TopSection"}>
                    <Row  className="d-flex justify-content-center">
                        <Col  md={10} lg={10} sm={12} xs={12}>
                            <Container>
                                <DescriptionPlaceholder isLoading={this.state.isLoading}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>

                <Container className={this.state.MainDiv+" TopSection"}>
                    <Row  className="d-flex justify-content-center">
                        <Col  md={10} lg={10}  sm={12} xs={12}>
                            <Breadcrumb className="shadow-sm mt-2 bg-white">
                                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                                <Breadcrumb.Item><Link to="/orderList">Order History</Link></Breadcrumb.Item>
                            </Breadcrumb>
                            <Container className="mt-1">
                                <Row className="shadow-sm animated slideInDown bg-white p-4">
                                    {MyView}
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>


                <Modal show={this.state.ReviewModal} onHide={this.ReviewModalClose}>
                    <Modal.Header closeButton>
                        <h6> Write Review</h6>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                            <label className="form-label">Your Name</label>
                            <input onChange={this.nameOnChange} className="form-control" type="text" placeholder=""/>
                        </div>

                        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                            <label className="form-label">Rating</label>
                            <select onChange={this.RatingOnChange} className="form-control">
                                <option value="">Choose</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                            <label className="form-label">Comments</label>
                            <textarea onChange={this.CommentsOnChange}  rows={2}  className="form-control" type="text" placeholder=""/>
                        </div>


                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn site-btn" onClick={this.ReviewModalClose}>Cancel</button>
                        <button className="btn site-btn" onClick={this.PostReview}>Post</button>
                    </Modal.Footer>
                </Modal>

                {this.PageRefresh()}

            </Fragment>
        );
    }
}

export default OrderList;