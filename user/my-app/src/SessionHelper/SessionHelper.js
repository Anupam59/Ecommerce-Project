

class SessionHelper{

    static setAboutSession(JSONData){
        sessionStorage.setItem("SiteInfoAbout",JSONData);
    }
    static getAboutSession(){
        return sessionStorage.getItem("SiteInfoAbout");
    }


    static setPolicySession(JSONData){
        sessionStorage.setItem("SiteInfoPolicy",JSONData);
    }
    static getPolicySession(){
        return sessionStorage.getItem("SiteInfoPolicy");
    }


    static setPurchaseSession(JSONData){
        sessionStorage.setItem("SiteInfoPurchase",JSONData);
    }
    static getPurchaseSession(){
        return sessionStorage.getItem("SiteInfoPurchase");
    }


    static setRefundSession(JSONData){
        sessionStorage.setItem("SiteInfoRefund",JSONData);
    }
    static getRefundSession(){
        return sessionStorage.getItem("SiteInfoRefund");
    }


    static setUserMobileSession(UserMobile){
        sessionStorage.setItem("UserMobile",UserMobile);
    }
    static getUserMobileSession(){
        return sessionStorage.getItem("UserMobile");
    }
    static getRemoveMobileSession(){
        return sessionStorage.removeItem("UserMobile");
    }


    static setRedirectFromDetails(WindowLocation){
        sessionStorage.setItem("WindowLocation",WindowLocation);
    }
    static getRedirectFromDetails(){
        return sessionStorage.getItem("WindowLocation");
    }

}

export default SessionHelper;