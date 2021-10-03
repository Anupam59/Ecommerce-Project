<?php

namespace App\Http\Controllers;

use App\Models\ProductDetailsModel;
use App\Models\ProductListModel;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    function ProductIndex(){
        return view('Product');
    }

    function getProductData(){
        $result = json_encode(ProductListModel::orderBy('id','desc')->get(),true);
        return $result;
    }

    function ProductDelete(Request $result){
        $product_code = $result->input('code');

        $ProductDetails = ProductDetailsModel::where('product_code',$product_code)->delete();
        $ProductList = ProductListModel::where('product_code',$product_code)->delete();
        $item=[
            'ProductDetails'=>$ProductDetails,
            'ProductList'=>$ProductList,
        ];
        if($item==true){
            return 1;
        }
        else{
            return 0;
        }
    }


    function getProductDetails(Request $result){
        $product_code = $result->input('code');
        $ProductDetails = json_encode(ProductDetailsModel::where('product_code',$product_code)->get(),true);
        return $ProductDetails;
    }

    function getProductList(Request $result){
        $product_code = $result->input('code');
        $ProductDetails = json_encode(ProductListModel::where('product_code',$product_code)->get(),true);
        return $ProductDetails;
    }


    function ProductDetailsUpdate(Request $request){
        $img1 = $request->input('img1');
        $img2 = $request->input('img2');
        $img3 = $request->input('img3');
        $img4 = $request->input('img4');
        $des = $request->input('des');
        $color = $request->input('color');
        $size = $request->input('size');
        $details = $request->input('details');
        $product_code = $request->input('product_code');

        $result = ProductDetailsModel::where('product_code','=',$product_code)->update([
            'img1' => $img1,
            'img2' => $img2,
            'img3' => $img3,
            'img4' => $img4,
            'des' => $des,
            'color' => $color,
            'size' => $size,
            'details' => $details,
            'product_code' => $product_code
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function ProductListUpdate(Request $request){
        $title = $request->input('title');
        $price = $request->input('price');
        $special_price = $request->input('special_price');
        $image = $request->input('image');
        $category = $request->input('category');
        $subcategory = $request->input('subcategory');
        $remark = $request->input('remark');
        $shop_name = $request->input('shop_name');
        $shop_code = $request->input('shop_code');
        $brand = $request->input('brand');
        $star = $request->input('star');
        $product_code = $request->input('product_code');

        $result = ProductListModel::where('product_code','=',$product_code)->update([
            'title'=>$title,
            'price'=>$price,
            'special_price'=>$special_price,
            'image'=>$image,
            'category'=>$category,
            'subcategory'=>$subcategory,
            'remark'=>$remark,
            'shop_name'=>$shop_name,
            'shop_code'=>$shop_code,
            'brand'=>$brand,
            'star'=>$star,
            'product_code'=>$product_code
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }

    }


    function AddProductDetails(Request $request){
        $img1 = $request->input('img1');
        $img2 = $request->input('img2');
        $img3 = $request->input('img3');
        $img4 = $request->input('img4');
        $des = $request->input('des');
        $color = $request->input('color');
        $size = $request->input('size');
        $details = $request->input('details');
        $product_code = $request->input('product_code');

        $result = ProductDetailsModel::insert([
            'img1' => $img1,
            'img2' => $img2,
            'img3' => $img3,
            'img4' => $img4,
            'des' => $des,
            'color' => $color,
            'size' => $size,
            'details' => $details,
            'product_code' => $product_code,
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }

    }


    function AddProductList(Request $request){
        $title = $request->input('title');
        $price = $request->input('price');
        $special_price = $request->input('special_price');
        $image = $request->input('image');
        $category = $request->input('category');
        $subcategory = $request->input('subcategory');
        $remark = $request->input('remark');
        $shop_name = $request->input('shop_name');
        $shop_code = $request->input('shop_code');
        $brand = $request->input('brand');
        $star = $request->input('star');
        $product_code = $request->input('product_code');

        $result = ProductListModel::insert([
            'title'=>$title,
            'price'=>$price,
            'special_price'=>$special_price,
            'image'=>$image,
            'category'=>$category,
            'subcategory'=>$subcategory,
            'remark'=>$remark,
            'shop_name'=>$shop_name,
            'shop_code'=>$shop_code,
            'brand'=>$brand,
            'star'=>$star,
            'product_code'=>$product_code,
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }

    }






}
