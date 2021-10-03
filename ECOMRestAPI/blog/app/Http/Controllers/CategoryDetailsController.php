<?php

namespace App\Http\Controllers;

use App\Models\CategoryLevel1Model;
use App\Models\CategoryLevel2Model;
use Illuminate\Http\Request;

class CategoryDetailsController extends Controller
{
    function SendCategoryDetails(){
        $ParentCategory = CategoryLevel1Model::all();
        $CategoryDetailsArray=[];

        foreach ($ParentCategory as $value){
            $SubCategory = CategoryLevel2Model::where('cat1_name',$value['cat1_name'])->get();
            $item=[
                'ParentCategoryName'=>$value['cat1_name'],
                'ParentCategoryImg'=>$value['cat1_image'],
                'SubCategory'=>$SubCategory
            ];
            array_push($CategoryDetailsArray,$item);
        }
        return $CategoryDetailsArray;
    }
}
