<?php

namespace App\Http\Controllers;

use App\Models\AdminModel;
use App\Models\CategoryLevel1Model;
use App\Models\CategoryLevel2Model;
use App\Models\NotificationModel;
use App\Models\ContactModel;
use App\Models\PhotoModel;
use App\Models\ProductListModel;
use App\Models\ReviewModel;
use App\Models\SliderModel;
use App\Models\VisitorModel;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    function HomeIndex(){
        $TotalAdmin= AdminModel::count();
        $TotalCategory=CategoryLevel1Model::count();
        $TotalSubCategory=CategoryLevel2Model::count();
        $TotalNotification=NotificationModel::count();
        $TotalContact=ContactModel::count();
        $TotalPhoto=PhotoModel::count();
        $TotalProductList=ProductListModel::count();
        $TotalReview=ReviewModel::count();
        $TotalSlider=SliderModel::count();
        $TotalVisitor=VisitorModel::count();

        return view('Home',[
            'TotalAdmin'=>$TotalAdmin,
            'TotalCategory'=>$TotalCategory,
            'TotalSubCategory' =>$TotalSubCategory,
            'TotalNotification'=>$TotalNotification,
            'TotalContact'=>$TotalContact,
            'TotalPhoto'=>$TotalPhoto,
            'TotalProduct' =>$TotalProductList,
            'TotalReview' =>$TotalReview,
            'TotalSlider' =>$TotalSlider,
            'TotalVisitor' =>$TotalVisitor,
        ]);
    }
}
