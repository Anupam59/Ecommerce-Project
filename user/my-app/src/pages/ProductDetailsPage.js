import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductDetails from "../components/productDetails/ProductDetails";
import SuggestedProducts from "../components/productDetails/SuggestedProducts";
import axios from "axios";
import ApiUrl from "../api/ApiURL";
import SliderLoader from "../components/PlaceHolder/SliderLoader";

class ProductDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            Code:match.params.Code,
            ProductData:[],
            isLoading:"",
            mainDiv:"d-none",
        }
    }
    componentDidMount() {
        axios.get(ApiUrl.ProductDetails(this.state.Code)).then(response=>{
            this.setState({ProductData:response.data,isLoading:"d-none",mainDiv:""});
        }).catch(error=>{

        })
    }

    render() {

        if (this.state.mainDiv=="d-none"){
            return (
                <Fragment>
                    <div className="Desktop">
                        <NavMenuDesktop></NavMenuDesktop>
                    </div>
                    <div className="Mobile">
                        <NavMenuMobile></NavMenuMobile>
                    </div>

                    <SliderLoader isLoading={this.state.isLoading}/>
                    <SliderLoader isLoading={this.state.isLoading}/>

                    <div className="Desktop">
                        <FooterDesktop></FooterDesktop>
                    </div>
                    <div className="Mobile">
                        <FooterMobile></FooterMobile>
                    </div>
                </Fragment>
            );
        }else {
            return (
                <Fragment>
                    <div className="Desktop">
                        <NavMenuDesktop></NavMenuDesktop>
                    </div>
                    <div className="Mobile">
                        <NavMenuMobile></NavMenuMobile>
                    </div>

                    <ProductDetails ProductData={this.state.ProductData}/>


                    <div className="Desktop">
                        <FooterDesktop></FooterDesktop>
                    </div>
                    <div className="Mobile">
                        <FooterMobile></FooterMobile>
                    </div>
                </Fragment>
            );
        }


    }
}

export default ProductDetailsPage;