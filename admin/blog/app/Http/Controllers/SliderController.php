<?php

namespace App\Http\Controllers;

use App\Models\SliderModel;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    function SliderIndex(){
        return view('Slider');
    }

    function getSliderData(){
        $result = json_encode(SliderModel::orderBy('id','desc')->get(),true);
        return $result;
    }

    function SliderDelete(Request $result){
        $id = $result->input('id');
        $result = SliderModel::where('id','=',$id)->delete();

        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }

    function getSliderDetails(Request $result){
        $id = $result->input('id');
        $result = json_encode(SliderModel::where('id','=',$id)->get());
        return $result;
    }

    function SliderUpdate(Request $request){
        $id = $request->input('id');
        $title = $request->input('title');
        $sub_title = $request->input('sub_title');
        $image = $request->input('image');
        $text_color = $request->input('text_color');
        $bg_color = $request->input('bg_color');
        $product_code = $request->input('product_code');

        $result = SliderModel::where('id','=',$id)->update([
            'title'=>$title,
            'sub_title'=>$sub_title,
            'image'=>$image,
            'text_color'=>$text_color,
            'bg_color'=>$bg_color,
            'product_code'=>$product_code
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }


    function AddSlider(Request $request){
        $title = $request->input('title');
        $sub_title = $request->input('sub_title');
        $image = $request->input('image');
        $text_color = $request->input('text_color');
        $bg_color = $request->input('bg_color');
        $product_code = $request->input('product_code');

        $result = SliderModel::insert([
            'title'=>$title,
            'sub_title'=>$sub_title,
            'image'=>$image,
            'text_color'=>$text_color,
            'bg_color'=>$bg_color,
            'product_code'=>$product_code
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }
}
