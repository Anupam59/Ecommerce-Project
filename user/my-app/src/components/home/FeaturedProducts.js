import React, {Component,Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import FeaturedProductLoader from "../PlaceHolder/FeaturedProductLoader";

class FeaturedProducts extends Component {

    constructor() {
        super();
        this.state={
            RemarkData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.ProductListRemark("Featured")).then(response=>{
            this.setState({RemarkData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }


    render() {

        const MyList = this.state.RemarkData;
        const MyView = MyList.map((ProductList,i)=>{

            if (ProductList.special_price=="Na"){
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link className="text-decoration-none" to={"/productDetails/"+ProductList.product_code}>
                        <Card className="card w-100 image-box ">
                            <img src={ProductList.image}/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{ProductList.title}</h5>
                                <p className="product-price-on-card">Price: {ProductList.price}TK</p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }
            else {
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link className="text-decoration-none" to={"/productDetails/"+ProductList.product_code}>
                        <Card className="card w-100 image-box">
                            <img src={ProductList.image}/>
                            <Card.Body>
                                <h5 className="product-name-on-card">{ProductList.title}</h5>
                                <p className="product-price-on-card">
                                    Price: <strike class="text-secondary ml-1">{ProductList.price} </strike>{ProductList.special_price} TK
                                </p>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            }
        })

        return (
            <Fragment>

                <FeaturedProductLoader isLoading={this.state.isLoading}/>

                <div className={this.state.mainDiv}>
                <Container className="text-center BetweenTwoSection" fluid={true}>
                    <h4 className="section-title">FEATURED PRODUCTS</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row>
                        {MyView}
                    </Row>
                </Container>
                </div>

            </Fragment>
        );
    }
}

export default FeaturedProducts;