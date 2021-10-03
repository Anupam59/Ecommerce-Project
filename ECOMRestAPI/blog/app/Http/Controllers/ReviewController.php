<?php

namespace App\Http\Controllers;

use App\Models\ReviewModel;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function PostReview(Request $request){
        $product_name=  $request->input('product_name');
        $product_code=  $request->input('product_code');
        $mobile=  $request->input('mobile');
        $reviewer_photo=$request->input('reviewer_photo');
        $reviewer_name=$request->input('reviewer_name');
        $reviewer_rating=$request->input('reviewer_rating');
        $reviewer_comments=$request->input('reviewer_comments');
        $result= ReviewModel::insert([
            'product_code'=>$product_code,
            'product_name'=>$product_name,
            'mobile'=>$mobile,
            'reviewer_photo'=>$reviewer_photo,
            'reviewer_name'=> $reviewer_name,
            'reviewer_rating'=> $reviewer_rating,
            'reviewer_comments'=>$reviewer_comments,
        ]);
        return $result;
    }

    function ReviewList(Request $request){
        $Code = urldecode($request->Code);
        $result = ReviewModel::where('product_code',$Code)->orderBy('id','desc')->limit(7)->get();
        return $result;
    }
}
