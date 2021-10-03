<?php

namespace App\Http\Controllers;

use App\Models\CategoryLevel1Model;
use App\Models\CategoryLevel2Model;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function CategoryIndex(){
        return view('Category');
    }

    function SelectOptionCategory(){
        $Category = CategoryLevel1Model::all();
        return $Category;
    }

    function SelectSubCategory(Request $request){
        $CategoryName = $request->input('CategoryName');
        $result = CategoryLevel2Model::where('cat1_name','=',$CategoryName)->get();
        return $result;
    }

    function SelectOptionSubCategory(Request $request){
        $SubCategory = CategoryLevel2Model::all();
        return $SubCategory;
    }

    function AddCategoryList(Request $request){
        $cat1_name = $request->input('cat1_name');
        $cat1_image = $request->input('cat1_image');

        $result = CategoryLevel1Model::insert([
            'cat1_name' => $cat1_name,
            'cat1_image' => $cat1_image
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }


    function AddSubCategoryList(Request $request){
        $cat1_name = $request->input('cat1_name');
        $cat2_name = $request->input('cat2_name');

        $result = CategoryLevel2Model::insert([
            'cat1_name' => $cat1_name,
            'cat2_name' => $cat2_name
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }


    function DeleteCategory(Request $result){
        $cat1_name = $result->input('cat1_name');
        $result1 = CategoryLevel1Model::where('cat1_name','=',$cat1_name)->delete();
        $result2 = CategoryLevel2Model::where('cat1_name','=',$cat1_name)->delete();
        if($result1==true || $result2==true){
            return 1;
        }
        else{
            return 0;
        }
    }


    function DeleteSubCategory(Request $result){
        $cat1_name = $result->input('cat1_name');
        $cat2_name = $result->input('cat2_name');
        $result1 = CategoryLevel2Model::where('cat1_name','=',$cat1_name)->where('cat2_name','=',$cat2_name)->delete();
        if($result1==true){
            return 1;
        }
        else{
            return 0;
        }
    }


}
