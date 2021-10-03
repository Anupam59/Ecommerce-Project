import React, {Component, Fragment} from 'react';
import {Breadcrumb, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class ProductListSubCategory extends Component {
    render() {

        const SubCategory=this.props.SubCategory;
        const Category=this.props.Category;
        const MyList = this.props.ProductData;
        const MyView = MyList.map((ProductList,i)=>{

            if (ProductList.special_price=="Na"){
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link className="text-decoration-none" to={"/productDetails/"+ProductList.product_code}>
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
                return <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
                    <Link className="text-decoration-none" to={"/productDetails/"+ProductList.product_code}>
                        <Card className="card text-center w-100  image-box">
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
                <Container className="text-center pt-3  BetweenTwoSection" fluid={true}>
                    <Breadcrumb>
                        <Breadcrumb.Item><Link to={"/"}>Home</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/ProductListCategory/"+Category}>{Category}</Link></Breadcrumb.Item>
                        <Breadcrumb.Item><Link to={"/ProductListSubCategory/"+Category+"/"+SubCategory}>{SubCategory}</Link></Breadcrumb.Item>
                    </Breadcrumb>

                    <Row>
                        {MyView}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProductListSubCategory;