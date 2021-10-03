import React, {Component,Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import NavMenuMobile from "../components/common/NavMenuMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import UserProfile from "../components/UserProfile/UserProfile";

class UserProfilePage extends Component {

    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop></NavMenuDesktop>
                </div>
                <div className="Mobile">
                    <NavMenuMobile></NavMenuMobile>
                </div>

                <UserProfile></UserProfile>

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

export default UserProfilePage;