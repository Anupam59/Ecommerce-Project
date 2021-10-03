<?php

namespace App\Http\Controllers;

use App\Models\DirectOrderModel;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    function OrderIndex(){
        return view('OrderList');
    }

    function getOrderData(){
        $result = json_encode(DirectOrderModel::orderBy('id','desc')->get(),true);
        return $result;
    }

    function OrderDelete(Request $result){
        $id = $result->input('id');
        $result = DirectOrderModel::where('id','=',$id)->delete();
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }

    function OrderDetailsStatusUpdate(Request $request){
        $id = $request->input('id');
        $order_status = $request->input('order_status');
        $result = DirectOrderModel::where('id','=',$id)->update([
            'order_status' => $order_status,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }
}
