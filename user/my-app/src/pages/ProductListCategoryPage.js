import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductListCategory from "../components/productDetails/ProductListCategory";
import axios from "axios";
import ApiUrl from "../api/ApiURL";
import ProductListLoader from "../components/PlaceHolder/ProductListLoader";

class ProductListCategoryPage extends Component {

    constructor({match}) {
        super();
        this.state={
            Category:match.params.Category,
            ProductData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.ProductListCategory(this.state.Category)).then(response=>{
            this.setState({ProductData:response.data,isLoading:"d-none",mainDiv:""})
        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop></NavMenuDesktop>
                </div>
                <div className="Mobile">
                    <NavMenuMobile></NavMenuMobile>
                </div>

                <ProductListLoader isLoading={this.state.isLoading}/>
                <div className={this.state.mainDiv}>
                    <ProductListCategory Category={this.state.Category} ProductData={this.state.ProductData}/>
                </div>

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

export default ProductListCategoryPage;