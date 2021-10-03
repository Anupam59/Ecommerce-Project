import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import About from "../components/Others/About";

class AboutPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
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

                <About></About>

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

export default AboutPage;