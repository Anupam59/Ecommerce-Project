<?php

namespace App\Http\Controllers;

use App\Models\PhotoModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PhotoController extends Controller
{
    function PhotoIndex(){
        return view('PhotoGallery');
    }


    function PhotoDelete(Request  $request){

        $OldPhotoURL=$request->input('OldPhotoURL');
        $OldPhotoID=$request->input('id');


        $OldPhotoURLArray= explode("/", $OldPhotoURL);
        $OldPhotoName=end($OldPhotoURLArray);
        Storage::delete('public/'.$OldPhotoName);

        $DeleteRow= PhotoModel::where('id','=',$OldPhotoID)->delete();

        DB::statement("SET @autoid :=0;");
        DB::statement("UPDATE photo SET id = @autoid:=(@autoid+1);");
        DB::statement("ALTER TABLE photo AUTO_INCREMENT=1;");

        return  $DeleteRow;
    }

    function PhotoJSON(Request $request){
        return PhotoModel::orderBy('id','desc')->take(9)->get();
    }

    function PhotoJSON1(Request $request){
        return PhotoModel::orderBy('id','desc')->get();
    }

    function PhotoJSONByID(Request $request){
        $FirstID=$request->id;
        $LastID=$FirstID-9;
        return PhotoModel::where('id','<=',$FirstID)->where('id','>',$LastID)->orderBy('id','desc')->get();
    }


    function PhotoUpload(Request $request){
        $photoPath=  $request->file('photo')->store('public');
        $photoName=(explode('/',$photoPath))[1];

        $host=$_SERVER['HTTP_HOST'];
        $location="http://".$host."/storage/".$photoName;

        $result= PhotoModel::insert(['location'=>$location]);
        DB::statement("SET @autoid :=0;");
        DB::statement("UPDATE photo SET id = @autoid:=(@autoid+1);");
        DB::statement("ALTER TABLE photo AUTO_INCREMENT=1;");

        return $result;
    }


}
