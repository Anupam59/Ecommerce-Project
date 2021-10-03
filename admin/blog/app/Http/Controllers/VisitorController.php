<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\VisitorModel;

class VisitorController extends Controller
{
    function VisitorIndex(){

        //All data can be seen.
        //$VisitorData = json_decode(VisitorModel::all(),true);
        //$VisitorData = json_decode(VisitorModel::orderBy('id','desc')->take(3)->get(),true);

        $VisitorData = json_decode(VisitorModel::orderBy('id','desc')->limit(500)->get(),true);
        return view('Visitor',['VisitorData'=>$VisitorData]);
    }
}
