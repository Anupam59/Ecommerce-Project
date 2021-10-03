import React, {Component,Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import {Link} from "react-router-dom";
import CategoryPlaceholder from "../PlaceHolder/CategoryPlaceholder";

class Categories extends Component {
    constructor() {
        super();
        this.state={
            MenuData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.SendCategoryDetails).then(response=>{
            this.setState({MenuData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    render() {


        const MyList = this.state.MenuData;

        const MyView = MyList.map((ParentList,i)=>{
            return <Col className="p-0" key={1} xl={2} lg={2} md={2} sm={3} xs={6} >
                    <Link to={"/ProductListCategory/"+ParentList.ParentCategoryName}>
                        <Card className="h-100 w-100 text-center">
                            <Card.Body>
                                <img className="w-75" src={ParentList.ParentCategoryImg}/>
                                <h5 className="category-name">{ParentList.ParentCategoryName}</h5>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
        })


        return (
            <Fragment>

                <CategoryPlaceholder isLoading={this.state.isLoading}/>

                <div className={this.state.mainDiv}>
                    <Container className="text-center pt-3  BetweenTwoSection" fluid={true}>
                        <h4 className="section-title">CATEGORIES</h4>
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

export default Categories;