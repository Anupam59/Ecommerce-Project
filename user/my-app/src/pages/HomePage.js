import React, {Component,Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTopMobile from "../components/home/HomeTopMobile";
import NavMenuMobile from "../components/common/NavMenuMobile";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import HomeTopDesktop from "../components/home/HomeTopDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import axios from "axios";
import ApiUrl from "../api/ApiURL";


class HomePage extends Component {

    componentDidMount() {
        window.scroll(0,0);
        this.GetVisitorDetails();
    }

    GetVisitorDetails=()=>{
        axios.get(ApiUrl.VisitorDetails).then().catch();
    }

    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop></NavMenuDesktop>
                    <HomeTopDesktop></HomeTopDesktop>
                </div>
                <div className="Mobile">
                    <NavMenuMobile></NavMenuMobile>
                    <HomeTopMobile></HomeTopMobile>
                </div>

                <NewArrival></NewArrival>
                <FeaturedProducts></FeaturedProducts>
                <Collection></Collection>
                <Categories></Categories>


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

export default HomePage;