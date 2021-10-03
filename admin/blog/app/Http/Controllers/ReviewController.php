<?php

namespace App\Http\Controllers;

use App\Models\ReviewModel;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    function ReviewIndex(){
        return view('Review');
    }

    function getReviewData(){
        $result = json_encode(ReviewModel::orderBy('id','desc')->get(),true);
        return $result;
    }

    function ReviewDelete(Request $result){
        $id = $result->input('id');
        $result = ReviewModel::where('id','=',$id)->delete();

        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }

    function getReviewDetails(Request $request){
        $id = $request->input('id');
        $result = json_encode(ReviewModel::where('id',$id)->get(),true);
        return $result;
    }
}
