import React, {Component,Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import MegaMenu from "./MegaMenu";
import SliderHome from "./SliderHome";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import SliderLoader from "../PlaceHolder/SliderLoader";

class HomeTopDesktop extends Component {

    constructor() {
        super();
        this.state={
            MenuData:[],
            SliderData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.SendCategoryDetails).then(response=>{
            this.setState({MenuData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })

        //Slider Info
        axios.get(ApiUrl.SendSliderInfo).then(response=>{
            this.setState({SliderData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>

                <SliderLoader isLoading={this.state.isLoading}/>

                <div className={this.state.mainDiv}>
                <Container className="p-0 m-0 overflow-hidden TopSection" fluid={true}>
                    <Row>
                        <Col lg={3} md={3} sm={12}>
                            <MegaMenu data={this.state.MenuData}/>
                        </Col>
                        <Col lg={9} md={9} sm={12}>
                            <SliderHome data={this.state.SliderData}/>
                        </Col>
                    </Row>
                </Container>
                </div>


            </Fragment>
        );
    }
}

export default HomeTopDesktop;