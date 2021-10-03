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
}
