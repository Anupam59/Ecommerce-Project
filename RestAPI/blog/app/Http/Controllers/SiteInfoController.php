<?php

namespace App\Http\Controllers;

use App\Models\SiteInfoModel;
use Illuminate\Http\Request;

class SiteInfoController extends Controller
{
    function SendSiteInfo(){
        $result= SiteInfoModel::all();
        return $result;
    }
}
