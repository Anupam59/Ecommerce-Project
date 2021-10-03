import React, {Component,Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import SpecialCollectionPlaceholder from "../PlaceHolder/SpecialCollectionPlaceholder";
import {Link} from "react-router-dom";

class Collection extends Component {

    constructor() {
        super();
        this.state={
            RemarkData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.ProductListRemark("Collection")).then(response=>{
            this.setState({RemarkData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    render() {

        const MyList = this.state.RemarkData;
        const MyView = MyList.map((ProductList,i)=>{

            if (ProductList.special_price=="Na"){
                return <Col key={1} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Link className="text-decoration-none" to={"productDetails/"+ProductList.product_code}>
                    <Card className="card text-center w-100  image-box ">
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
                return <Col key={1} className="p-0" xl={3} lg={3} md={3} sm={6} xs={6} >
                    <Link className="text-decoration-none" to={"productDetails/"+ProductList.product_code}>
                    <Card className="card text-center w-100  image-box ">
                        <img src={ProductList.image}/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{ProductList.title}</h5>
                            <p className="product-price-on-card">
                                Price: <strike class="text-secondary ml-1">{ProductList.price}</strike>{ProductList.special_price} TK
                            </p>
                        </Card.Body>
                    </Card>
                    </Link>
                </Col>
            }
        })

        return (
            <Fragment>

                <SpecialCollectionPlaceholder isLoading={this.state.isLoading}/>

                <div className={this.state.mainDiv}>
                <Container  className="text-center bg-white card-body shadow-sm py-5 BetweenTwoSection" fluid={true}>
                    <h4 className="section-title ">SPECIAL COLLECTION</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row >
                        {MyView}
                    </Row>
                </Container>
                </div>

            </Fragment>
        );
    }
}

export default Collection;