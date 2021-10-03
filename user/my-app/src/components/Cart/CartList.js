import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import SessionHelper from "../../SessionHelper/SessionHelper";
import {Redirect} from "react-router";
import cogoToast from "cogo-toast";

class CartList extends Component {

    constructor() {
        super();
        this.state={
            ProductData:[],
            isLoading:"",
            mainDiv:"d-none",
            PageRefreshStatus:false,
            PageRedirectStatus:false,
            RemoveBtn:"",
            confirmBtn:"Confirm Order",
            totalPriceSum:0,
            city:"",
            payment:"",
            name:"",
            address:"",

        }
    }

    componentDidMount() {
        axios.get(ApiUrl.CartList(SessionHelper.getUserMobileSession())).then(response=>{
            this.setState({ProductData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    PageRefresh=()=>{
        if(this.state.PageRefreshStatus===true){
            return(
                <Redirect to={"/cart"}/>
            )
        }
    }

    PageRedirect=()=>{
        if(this.state.PageRedirectStatus===true){
            var url= "/orderList?totalPriceSum="+this.state.totalPriceSum;
            return(
                <Redirect to={url}/>
            )
        }
    }

    RemoveItem=(Id)=>{
        this.setState({RemoveBtn:"..."})
        axios.get(ApiUrl.CartItemRemove(Id)).then(response=>{
            if (response.data===1){
                cogoToast.success("Item Cart Remove",{position:'top-center'});
                this.setState({RemoveBtn:""})
                this.setState({PageRefreshStatus:true})
            }else {
                cogoToast.error("Request Fail ! Try Again",{position:'top-center'});
                this.setState({RemoveBtn:""})
            }
        }).catch(error=>{
            cogoToast.error("Request Fail ! Try Again",{position:'top-center'});
            this.setState({RemoveBtn:""})
        })
    }

    CartItemPlus=(Id,product_quantity,unit_price)=>{
        axios.get(ApiUrl.CartItemPlus(Id,product_quantity,unit_price)).then((response)=>{
            if (response.data===1){
                cogoToast.success("Add 1 Quantity",{position:'top-center'});
                this.setState({PageRefreshStatus:true})
            }else {
                cogoToast.error("Request Fail ! Try Again",{position:'top-center'});
            }
        }).catch((error)=>{
            cogoToast.error("Request Fail ! Try Again",{position:'top-center'});
        })
    }

    CartItemMinus=(Id,product_quantity,unit_price)=>{
        axios.get(ApiUrl.CartItemMinus(Id,product_quantity,unit_price)).then((response)=>{
            if (response.data===1){
                cogoToast.success("Minus 1 Quantity",{position:'top-center'});
                this.setState({PageRefreshStatus:true})
            }else {
                cogoToast.error("Request Fail ! Try Again",{position:'top-center'});
            }
        }).catch((error)=>{
            cogoToast.error("Request Fail ! Try Again",{position:'top-center'});
        })
    }

    cityOnChange=(event)=>{
        let city= event.target.value;
        this.setState({city:city})
    }
    paymentMethodOnChange=(event)=>{
        let payment= event.target.value;
        this.setState({payment:payment})
    }
    nameOnChange=(event)=>{
        let name= event.target.value;
        this.setState({name:name})
    }
    addressOnChange=(event)=>{
        let address= event.target.value;
        this.setState({address:address})
    }


    confirmOnClick=(e)=>{
        let totalPriceSum = e.target.getAttribute("data-totalPriceSum");;
        let city= this.state.city;
        let payment=this.state.payment;
        let name=this.state.name;
        let address=this.state.address;
        let invoice=new Date().getTime();


        if(city.length===0){
            cogoToast.error("Please select city",{position:'top-center'})
        }
        else if(payment.length===0){
            cogoToast.error("Select payment method",{position:'top-center'})
        }
        else if(name.length===0){
            cogoToast.error("Your name required",{position:'top-center'})
        }
        else if(address.length===0){
            cogoToast.error("Delivery address required",{position:'top-center'})
        }

        else{

            let MyFormData=new FormData();
            MyFormData.append('city',city);
            MyFormData.append('paymentMethod',payment);
            MyFormData.append('yourName',name);
            MyFormData.append('deliveryAddress',address);
            MyFormData.append('mobileNumber',SessionHelper.getUserMobileSession());
            MyFormData.append('invoice_no',invoice);
            MyFormData.append('ShippingPrice',"0000");

            axios.post(ApiUrl.CartOrder,MyFormData).then((response)=>{
                if(response.data===1){
                    this.setState({totalPriceSum:totalPriceSum});
                    this.setState({PageRedirectStatus:true})
                    cogoToast.success("Order request received",{position:'top-center'})
                }
                else{
                    cogoToast.error("Request Fail ! Try Again",{position:'top-center'})
                }
            }).catch((error)=>{
                alert(error)
                cogoToast.error("Request Fail ! Try Again",{position:'top-center'})
            })
        }
    }

    render() {

        const MyList = this.state.ProductData;
        let totalPriceSum=this.state.totalPriceSum;
        const MyView = MyList.map((ProductList,i)=>{
            totalPriceSum=totalPriceSum+parseInt(ProductList.total_price);
            return  <div className="container">
                <div className="row">
                    <div className="col-md-3 col-lg-3 col-sm-4 col-6">
                        <Link to={"/productDetails/"+ProductList.product_code}>
                            <img className="w-100" src={ProductList.img} alt=""/>
                        </Link>
                        <Button onClick={()=>this.RemoveItem(ProductList.id)} className="btn text-danger ml-4 w-25 btn-light"><i className='fa fa-trash-alt'></i>{this.state.RemoveBtn} </Button>
                        <Button onClick={()=>this.CartItemPlus(ProductList.id,ProductList.product_quantity,ProductList.unit_price)} className="btn text-danger w-25 btn-light"><i className="fa fa-plus"/>{this.state.RemoveBtn} </Button>
                        <Button onClick={()=>this.CartItemMinus(ProductList.id,ProductList.product_quantity,ProductList.unit_price)} className="btn text-danger w-25 btn-light"><i className="fa fa-minus"/>{this.state.RemoveBtn} </Button>

                    </div>
                    <div className="col-md-7 col-lg-7 col-sm-8 col-6">
                        <h5 className="product-name-on-card">{(ProductList.product_name).substring(0,50) }</h5>
                        <h5 className="product-price-on-card">Total Price:{ProductList.total_price}TK</h5>
                        <h5 className="product-name-on-card">{(ProductList.product_info)}</h5>
                        <h5 className="product-price-on-card">Quantity:{ ProductList.product_quantity}</h5>

                    </div>
                </div>
                <hr/>
            </div>
        })

        return (
            <Fragment>
                <Container fluid={true} className="TopSection pb-5 shadow-sm bg-white">
                    <Row className="p-2 bg-light text-center">
                        <Col className="p-1" key={1} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <h5 className=" "> PRODUCT CART LIST</h5>
                        </Col>
                    </Row>

                    <Row className="p-2">

                        <Col md={7} lg={7} sm={12} xs={12}>
                            {MyView}
                        </Col>

                        <Col md={5} lg={5} sm={12} xs={12}>
                            <div className="card p-2">
                                <div className="card-body">
                                    <div className="container-fluid ">
                                        <div className="row">
                                            <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                                                <h5 className="Product-Name text-danger">Total Due: {totalPriceSum} TK</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Choose City</label>
                                                <select onChange={this.cityOnChange}  className="form-control">
                                                    <option value="">Choose</option>
                                                    <option value="Dhaka">Dhaka</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Choose Payment Method</label>
                                                <select onChange={this.paymentMethodOnChange} className="form-control">
                                                    <option value="">Choose</option>
                                                    <option value="Cash On Delivery">Cash On Delivery</option>
                                                </select>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Your Name</label>
                                                <input onChange={this.nameOnChange} className="form-control" type="text" placeholder=""/>
                                            </div>

                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <label className="form-label">Delivery Address</label>
                                                <textarea onChange={this.addressOnChange}  rows={2}  className="form-control" type="text" placeholder=""/>
                                            </div>
                                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                                <button onClick={this.confirmOnClick} data-totalPriceSum={totalPriceSum} className="btn  site-btn">{this.state.confirmBtn}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                    </Row>

                </Container>
                {this.PageRefresh()}
                {this.PageRedirect()}
            </Fragment>
        );
    }
}

export default CartList;