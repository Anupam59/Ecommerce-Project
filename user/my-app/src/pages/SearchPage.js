import React, {Component, Fragment} from 'react';
import axios from "axios";
import ApiUrl from "../api/ApiURL";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import ProductListLoader from "../components/PlaceHolder/ProductListLoader";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import SearchList from "../components/productDetails/SearchList";

class SearchPage extends Component {

    constructor({match}) {
        super();
        this.state={
            SearchKey:match.params.SearchKey,
            ProductData:[],
            isLoading:"",
            mainDiv:"d-none"
        }
    }

    componentDidMount() {
        axios.get(ApiUrl.ProductListBySearch(this.state.SearchKey)).then(response=>{
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
                    <SearchList SearchKey={this.state.SearchKey} ProductData={this.state.ProductData}/>
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

export default SearchPage;