<?php

namespace App\Http\Controllers;

use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    function ProductListRemark(Request $request){
        $remark = urldecode($request->remark);
        $ProductList = ProductListModel::Where('remark',$remark)->get();
        return $ProductList;
    }

    function ProductListSubCategory(Request $request){
        $SubCategory = urldecode($request->SubCategory);
        $Category = urldecode($request->Category);
        $ProductList = ProductListModel::Where('category',$Category)->Where('subcategory',$SubCategory)->get();
        return $ProductList;
    }

    function ProductListCategory(Request $request){
        $Category = urldecode($request->Category);
        $ProductList = ProductListModel::Where('category',$Category)->get();
        return $ProductList;
    }

    function ProductBySearch(Request $request){
        $key = urldecode($request->key);
        $ProductList = ProductListModel::Where('title','LIKE',"%{$key}%")->get();
        return $ProductList;
    }

    function SuggestedProducts(Request $request){
        $SubCategory = urldecode($request->SubCategory);
        $ProductList = ProductListModel::Where('subcategory',$SubCategory)->orderBy('id','desc')->limit(6)->get();
        return $ProductList;
    }
}
