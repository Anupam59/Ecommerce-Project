<?php

namespace App\Http\Controllers;

use App\Models\AdminModel;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    //Login and LogOut part.
    function LoginIndex(){
        return view('Login');
    }
    function onLogout(Request $request){
        $request->session()->flush();
        return redirect('/Login');
    }

    function onLogin(Request $request){
        $user= $request->input('user');
        $pass= $request->input('pass');
        $countValue=AdminModel::where('username','=',$user)->where('password','=',$pass)->count();

        if($countValue==1){
            $request->session()->put('user',$user);
            return 1;
        }
        else{
            return 0;
        }
    }


     //Admin Profile Update.
    function AdminProfile(){
        return view('AdminProfile');
    }
    function AdminUpdate(Request $request){
        $username = $request->session()->get('user');
        $result=AdminModel::where('username','=',$username)->get();
        return $result;
    }

    function AdminUpdateData(Request $request){
        $username = $request->session()->get('user');
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $number = $request->input('number');
        $result = AdminModel::where('username','=',$username)->update([
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'number' => $number,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function getAdminData(){
        $result = json_encode(AdminModel::orderBy('id','desc')->get(),true);
        return $result;
    }

    function AdminDelete(Request $request){
        $user = $request->session()->get('user');
        $username = $request->input('username');
        if ($user==$username){
           return 0;
        }else{
            $result = AdminModel::where('username',$username)->delete();
            if($result==true){
                return 1;
            }
            else{
                return 0;
            }
        }
    }

    function AddAdminProfile(Request $request){
        $name = $request->input('name');
        $email = $request->input('email');
        $username = $request->input('username');
        $password = $request->input('password');
        $number = $request->input('number');
        $result = AdminModel::insert([
            'name' => $name,
            'email' => $email,
            'username' => $username,
            'password' => $password,
            'number' => $number,
        ]);
        if($result==true){
            return 1;
        }
        else{
            return 0;
        }
    }
}
