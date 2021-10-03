import React, {Component,Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import SessionHelper from "../../SessionHelper/SessionHelper";
import cogoToast from "cogo-toast";
import {Redirect} from "react-router";

class Favourite extends Component {

    constructor() {
        super();
        this.state={
            ProductData:[],
            isLoading:"",
            mainDiv:"d-none",
            PageRefreshStatus:false,
            RemoveBtn:"Remove"
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.FavouriteList(SessionHelper.getUserMobileSession())).then(response=>{
            this.setState({ProductData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    PageRefresh=()=>{
        if(this.state.PageRefreshStatus===true){
            return(
                <Redirect to={"/favourite"}/>
            )
        }
    }

    RemoveItem=(event)=>{
        this.setState({RemoveBtn:"Removing..."})
        let ProductCode = event.target.getAttribute('data-code')
        let MobileNo = SessionHelper.getUserMobileSession();
        axios.get(ApiUrl.FavouriteItemRemove(MobileNo,ProductCode)).then(response=>{
            if (response.data===1){
                cogoToast.success("Item Favourite Remove",{position:'top-center'});
                this.setState({RemoveBtn:"Remove"})
                this.setState({PageRefreshStatus:true})
            }else {
                cogoToast.error("Request Fail ! Try Again",{position:'top-center'});
                this.setState({RemoveBtn:"Remove"})
            }
        }).catch(error=>{
            cogoToast.error("Request Fail ! Try Again",{position:'top-center'});
            this.setState({RemoveBtn:"Remove"})
        })

    }

    render() {

        const MyList = this.state.ProductData;
        const MyView = MyList.map((ProductList,i)=>{
            return <Col className="p-1" xl={3} lg={3} md={3} sm={6} xs={6} >
                <Card className="card text-center w-100  image-box ">
                    <img src={ProductList.image}/>
                    <Card.Body>
                        <h5 className="product-name-on-card">{ProductList.title}</h5>
                        <Button onClick={this.RemoveItem} data-code={ProductList.product_code} className="btn btn-sm site-btn"><i className="fa fa-trash-alt"></i> {this.state.RemoveBtn} </Button>
                        <Link to={"/productDetails/"+ProductList.product_code} className="btn btn-sm site-btn ml-2"> Details </Link>
                    </Card.Body>
                </Card>
            </Col>
        })

        return (
            <Fragment>
                <Container  className="text-center bg-white card-body shadow-sm py-5 BetweenTwoSection" fluid={true}>
                    <h4 className="section-title ">My Favourite Items</h4>
                    <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                    <Row >
                        {MyView}
                    </Row>
                </Container>
                {this.PageRefresh()}
            </Fragment>
        );
    }
}

export default Favourite;