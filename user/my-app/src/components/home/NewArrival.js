import React, {Component,Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Card, Col, Container} from "react-bootstrap";
import axios from "axios";
import ApiUrl from "../../api/ApiURL";
import NewArrivalPlaceholder from "../PlaceHolder/NewArrivalPlaceholder";
import {Link} from "react-router-dom";


class NewArrival extends Component {

    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);
        this.state={
            RemarkData:[],
            isLoading:"",
            mainDiv:"d-none"
        }

    }

    componentDidMount() {
        axios.get(ApiUrl.ProductListRemark("New")).then(response=>{
            this.setState({RemarkData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplaySpeed:3000,
            autoplay:true,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        const MyList = this.state.RemarkData;
        const MyView = MyList.map((ProductList,i)=> {

            if (ProductList.special_price=="Na"){
                return <div key={1} className="p-1 h-100">
                    <Link className="text-decoration-none" to={"/productDetails/"+ProductList.product_code}>
                    <Card className="card w-100  image-box ">
                        <img src={ProductList.image}/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{ProductList.title}</h5>
                            <p className="product-price-on-card">Price: {ProductList.price}TK</p>
                        </Card.Body>
                    </Card>
                    </Link>
                </div>
            }
            else {
                return <div key={1} className="p-1 h-100">
                    <Link className="text-decoration-none" to={"/productDetails/"+ProductList.product_code}>
                    <Card className="card w-100  image-box ">
                        <img src={ProductList.image}/>
                        <Card.Body>
                            <h5 className="product-name-on-card">{ProductList.title}</h5>
                            <p className="product-price-on-card">
                                Price: <strike class="text-secondary ml-1">{ProductList.price} </strike>{ProductList.special_price} TK
                            </p>
                        </Card.Body>
                    </Card>
                    </Link>
                </div>
            }


        })

        return (
            <Fragment>


            <NewArrivalPlaceholder isLoading={this.state.isLoading}/>

            <div className={this.state.mainDiv}>
            <Container className="text-center BetweenTwoSection" fluid={true}>
                <h4 className="section-title px-0 mx-0 ">NEW ARRIVAL
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} >
                        <i className="fa fa-angle-left"></i>
                    </a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                        <i className="fa fa-angle-right"></i>
                    </a>
                </h4>
                <h6 className="section-sub-title pb-3">Some Of Our Exclusive Collection, You May Like</h6>
                <Slider  ref={c=>(this.slider=c)}   {...settings}>
                    {MyView}
                </Slider>
            </Container>
            </div>
            </Fragment>
        );
    }
}

export default NewArrival;