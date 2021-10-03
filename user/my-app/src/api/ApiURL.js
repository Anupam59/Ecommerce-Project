
class ApiUrl{
    static BaseURL="http://127.0.0.1:8000/api/";
    static VisitorDetails=this.BaseURL+"SendVisitorDetails";
    static SendContactDetails=this.BaseURL+"SendContactDetails";
    static SendSiteInfo=this.BaseURL+"SendSiteInfo";
    static SendCategoryDetails=this.BaseURL+"SendCategoryDetails";

    static ProductListRemark(Remark){
        return this.BaseURL+"ProductListRemark/"+Remark;
    }
    static ProductListCategory(Category){
        return this.BaseURL+"ProductListCategory/"+Category;
    }
    static ProductListSubCategory(Category,SubCategory){
        return this.BaseURL+"ProductListSubCategory/"+Category+"/"+SubCategory;
    }

    static SendSliderInfo=this.BaseURL+"SendSliderInfo";

    static ProductDetails(ProductCode){
        return this.BaseURL+"ProductDetails/"+ProductCode;
    }

    static NotificationHistory=this.BaseURL+"NotificationHistory";

    static ProductListBySearch(SearchKey){
        return this.BaseURL+"ProductBySearch/"+SearchKey;
    }

    static SuggestedProducts(SubCategory){
        return this.BaseURL+"SuggestedProducts/"+SubCategory;
    }

    static ReviewList(Code){
        return this.BaseURL+"ReviewList/"+Code;
    }



    static AddToCart=this.BaseURL+"AddToCart";
    static CartList(mobile){
        return this.BaseURL+"CartList/"+mobile;
    }
    static CartItemRemove(Id){
        return this.BaseURL+"CartItemRemove/"+Id;
    }
    static CartCount(mobile){
        return this.BaseURL+"CartCount/"+mobile;
    }
    static CartItemPlus(Id,Quantity,Price){
        return this.BaseURL+"CartItemPlus/"+Id+"/"+Quantity+"/"+Price;
    }
    static CartItemMinus(Id,Quantity,Price){
        return this.BaseURL+"CartItemMinus/"+Id+"/"+Quantity+"/"+Price;
    }




    static CartOrder =this.BaseURL+"CartOrder";
    static OrderListByUser(mobile){
        return this.BaseURL+"OrderListByUser/"+mobile;
    }




    static  PostReview=this.BaseURL+"PostReview";





    static AddToFavourite(mobile,ProductCode){
        return this.BaseURL+"AddFavourite/"+mobile+"/"+ProductCode;
    }
    static FavouriteList(mobile){
        return this.BaseURL+"FavouriteList/"+mobile;
    }
    static FavouriteCount(mobile){
        return this.BaseURL+"FavouriteCount/"+mobile;
    }
    static FavouriteItemRemove(mobile,ProductCode){
        return this.BaseURL+"FavouriteItemRemove/"+mobile+"/"+ProductCode;
    }







    static UserLogin(mobile_number,password){
        return this.BaseURL+"UserLogin/"+mobile_number+"/"+password;
    }
    static  UserProfileUpdate=this.BaseURL+"UserProfileUpdate";

    static GetUserData(mobile_number){
        return this.BaseURL+"GetUserData/"+mobile_number;
    }



}
export default ApiUrl;