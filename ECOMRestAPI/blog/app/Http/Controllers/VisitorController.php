<?php

namespace App\Http\Controllers;

use App\Models\VisitorModel;
use Illuminate\Http\Request;

class VisitorController extends Controller
{
    function SendVisitorDetails(Request $request){
        $ip_address=$_SERVER['REMOTE_ADDR'];
        date_default_timezone_set("Asia/Dhaka");
        $visit_time= date("h:i:sa");
        $visit_date= date("d-m-Y");
        $result=visitorModel::insert([
            'ip_address'=>$ip_address,
            'visit_time'=>$visit_time,
            'visit_date'=>$visit_date,
        ]);
        return $result;
    }
}
