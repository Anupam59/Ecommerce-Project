<?php

namespace App\Http\Controllers;

use App\Models\UserLoginModel;
use Illuminate\Http\Request;

class UserLoginController extends Controller
{
    function UserLogin(Request $request){
        $mobile_number = $request->mobile_number;
        $password = $request->password;
        $Count = UserLoginModel::Where('mobile_number',$mobile_number)->Where('password',$password)->count();
        if ($Count==1){
            return "1";
        }else{
            return "0";
        }
    }

    function GetUserData(Request $request){
        $mobile_number = urldecode($request->mobile_number);
        $result = UserLoginModel::Where('mobile_number',$mobile_number)->get();
        return $result;
    }


    function UserProfileUpdate(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $mobile_number = $request->input('mobile_number');
        $password = $request->input('password');
        $address = $request->input('address');

        $result = UserLoginModel::where('mobile_number','=',$mobile_number)->update([
            'name'=>$name,
            'email'=>$email,
            'mobile_number'=>$mobile_number,
            'password'=>$password,
            'address'=>$address,
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }

}
