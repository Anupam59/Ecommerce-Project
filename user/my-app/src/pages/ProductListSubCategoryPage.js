import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import ProductListSubCategory from "../components/productDetails/ProductListSubCategory";
import axios from "axios";
import ApiUrl from "../api/ApiURL";
import ProductListLoader from "../components/PlaceHolder/ProductListLoader";

class ProductListSubCategoryPage extends Component {

    constructor({match}) {
        super();
        this.state={
            SubCategory:match.params.SubCategory,
            Category:match.params.Category,
            ProductData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.ProductListSubCategory(this.state.Category,this.state.SubCategory)).then(response=>{
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
                    <ProductListSubCategory Category={this.state.Category} SubCategory={this.state.SubCategory} ProductData={this.state.ProductData}/>
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

export default ProductListSubCategoryPage;