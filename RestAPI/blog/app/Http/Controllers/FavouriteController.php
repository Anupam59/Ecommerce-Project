<?php

namespace App\Http\Controllers;

use App\Models\FavouriteModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;

class FavouriteController extends Controller
{

    function addToFavourite(Request $request){
        $product_code = urldecode($request->product_code);
        $mobileNo = urldecode($request->mobile);
        $ProductDetails= ProductListModel::Where('product_code',$product_code)->get();
        $result = FavouriteModel::insert([
            'title'=>$ProductDetails[0]['title'],
            'image'=>$ProductDetails[0]['image'],
            'product_code'=>$product_code,
            'mobile'=>$mobileNo,
        ]);
        return $result;
    }

    function FavouriteList(Request $request){
        $mobileNo = urldecode($request->mobile);
        $result = FavouriteModel::Where('mobile',$mobileNo)->get();
        return $result;
    }

    function FavouriteItemRemove(Request $request){
        $product_code = urldecode($request->product_code);
        $mobileNo = urldecode($request->mobile);
        $result = FavouriteModel::Where('mobile',$mobileNo)->Where('product_code',$product_code)->delete();
        return $result;
    }

    function FavouriteCount(Request $request){
        $mobile=urldecode($request->mobile);
        $result=FavouriteModel::Where('mobile',$mobile)->count();
        return $result;
    }
}
