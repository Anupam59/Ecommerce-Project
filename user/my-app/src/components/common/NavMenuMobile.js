import React, {Component,Fragment} from 'react';
import {Navbar} from "react-bootstrap";
import MegaMenuMobile from "../home/MegaMenuMobile";
import {Link} from "react-router-dom";
import axios from "axios";
import love from "../../assets/images/love.svg";
import notification from "../../assets/images/notification.svg";
import user from "../../assets/images/user.svg";
import {Redirect} from "react-router";
import SessionHelper from "../../SessionHelper/SessionHelper";
import ApiUrl from "../../api/ApiURL";
class NavMenuMobile extends Component {
    constructor() {
        super();
        this.state={
            SearchKey:"",
            SearchRedirectStatus:false,
            SideNavState:"sideNavClose",
            ContentOverState:"ContentOverlayClose",
            MenuData:[],
            RedirectHome:false,
            cartCount:0,
            FavouriteCount:0,
        }
    }
    componentDidMount() {

        axios.get(ApiUrl.CartCount(SessionHelper.getUserMobileSession())).then((res)=>{
            this.setState({cartCount:res.data})
        })

        axios.get(ApiUrl.FavouriteCount(SessionHelper.getUserMobileSession())).then(response=>{
            this.setState({FavouriteCount:response.data})
        }).catch(error=>{

        });

        axios.get(ApiUrl.SendCategoryDetails).then(response=> {
            this.setState({MenuData:response.data})
        })
    }

    SearchOnChange=(event)=>{
        let SearchKey = event.target.value;
        this.setState({SearchKey:SearchKey})
    }
    SearchOnClick=()=>{
        let SearchKey = this.state.SearchKey;
        if (SearchKey.length>=2){
            this.setState({SearchRedirectStatus:true})
        }
    }
    SearchRedirect=()=>{
        if (this.state.SearchRedirectStatus===true){
            return <Redirect to={"/ProductBySearch/"+this.state.SearchKey}/>
        }
    }


    MenuBarClickHandler=()=>{
        this.SideNavOpenClose();
    }
    ContentOverlayClickHandler=()=>{
        this.SideNavOpenClose();
    }
    SideNavOpenClose=()=>{
       let SideNavState= this.state.SideNavState;
       let ContentOverState =this.state.ContentOverState;
       if(SideNavState==="sideNavOpen"){
           this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})
       }
       else{
           this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
       }
    }
    UserLogout=()=>{
        SessionHelper.getRemoveMobileSession();
        this.setState({RedirectHome:true});
    }
    RedirectHome=()=>{
        if(this.state.RedirectHome===true){
            return <Redirect to="/"/>
        }
    }
    render() {

        let UserMobile= SessionHelper.getUserMobileSession();
        if(UserMobile===null){

            return (
                <Fragment>
                    <Navbar fluid={"true"} className="fixed-top d-flex justify-content-between shadow-sm p-2 m-0 bg-white">
                        <a onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"/></a>

                        <div className="float-right">
                            <Link to="/notification" className="btn mx-1 nav-round-btn"><img src={notification} alt="notification"/></Link>
                            <Link to="/cart" className="cart-btn float-right"><i className="fa fa-shopping-cart"/> {this.state.cartCount} items </Link>
                            <Link to="/favourite" className="btn mx-1 nav-round-btn"><i className="fa fa-search"/> </Link>
                        </div>

                    </Navbar>
                    <div  className={this.state.SideNavState}>
                        <Link to="/" className="btn"> <img className="nav-logo" src="images/logo.png" alt=""/></Link>
                        <hr className="my-2"/>
                        <MegaMenuMobile data={this.state.MenuData}/>

                        <div className="accordionMenuDiv">
                            <div className="accordionMenuDivInside">
                                <hr className="my-2"/>
                                <Link to="/about" className="nav-menu-mobile-item"><i className="fa fa-question-circle"/> About Us</Link>
                                <hr className="my-2"/>
                                <Link to="/contact" className="nav-menu-mobile-item"><i className="fa fa-envelope"/> Contact Us</Link>
                                <hr className="my-2"/>
                                <Link to="/purchase" className="nav-menu-mobile-item"><i className="fa fa-question-circle"/> How To Purchase</Link>
                                <hr className="my-2"/>
                                <Link to="/policy" className="nav-menu-mobile-item"><i className="fa fa-list"/> Privacy Policy</Link>
                                <hr className="my-2"/>
                                <Link  to="/refund" className="nav-menu-mobile-item"><i className="fa fa-list-alt"/> Refund Policy</Link>
                                <hr className="my-2"/>
                                <Link to="/onboard" className="nav-menu-mobile-item"><img src={user} alt="user"/> SIGN IN</Link>
                                <hr className="my-2"/>
                            </div>
                        </div>

                    </div>

                    <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>

                    </div>
                    {this.RedirectHome()}
                </Fragment>
            );
        }
        else {
            return (
                <Fragment>
                    <Navbar fluid={"true"} className="fixed-top d-flex justify-content-between shadow-sm p-2 m-0 bg-white">
                        <a onClick={this.MenuBarClickHandler} className=" mx-2 navbar-brand"><i className="fa fa-bars"/></a>

                        <div className="float-right">
                            <Link to="/favourite" className="btn mx-1 nav-round-btn"><i className="fa fa-search"/> </Link>
                            <Link to="/favourite" className="btn mx-1 nav-round-btn"><img src={love} alt="love"/> </Link>
                            <Link to="/notification" className="btn mx-1 nav-round-btn"><img src={notification} alt="notification"/></Link>
                            <Link to="/orderList" className="btn mx-1 nav-round-btn"><img src={user} alt="user"/></Link>
                            <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"/> {this.state.cartCount} items </Link>
                        </div>

                    </Navbar>


                    <div  className={this.state.SideNavState}>
                        <Link to="/" className="btn"> <img className="nav-logo" src="images/logo.png" alt=""/></Link>
                        <hr className="my-2"/>
                        <MegaMenuMobile data={this.state.MenuData}/>

                        <div className="accordionMenuDiv">
                            <div className="accordionMenuDivInside">
                                <hr className="my-2"/>
                                <Link to="/about" className="nav-menu-mobile-item"><i className="fa fa-question-circle"/> About Us</Link>
                                <hr className="my-2"/>
                                <Link to="/contact" className="nav-menu-mobile-item"><i className="fa fa-envelope"/> Contact Us</Link>
                                <hr className="my-2"/>
                                <Link to="/purchase" className="nav-menu-mobile-item"><i className="fa fa-question-circle"/> How To Purchase</Link>
                                <hr className="my-2"/>
                                <Link to="/policy" className="nav-menu-mobile-item"><i className="fa fa-list"/> Privacy Policy</Link>
                                <hr className="my-2"/>
                                <Link  to="/refund" className="nav-menu-mobile-item"><i className="fa fa-list-alt"/> Refund Policy</Link>
                                <hr className="my-2"/>
                                <Link onClick={this.UserLogout} className="nav-menu-mobile-item"> <i className="fa fa-user-circle"/> SIGN OUT</Link>
                                <hr className="my-2"/>
                            </div>
                        </div>

                    </div>

                    <div onClick={this.ContentOverlayClickHandler}  className={this.state.ContentOverState}>

                    </div>
                    {this.RedirectHome()}
                </Fragment>
            );
        }


    }
}

export default NavMenuMobile;