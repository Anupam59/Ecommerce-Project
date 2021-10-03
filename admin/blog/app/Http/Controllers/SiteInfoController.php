<?php

namespace App\Http\Controllers;

use App\Models\SiteInfoModel;
use Illuminate\Http\Request;

class SiteInfoController extends Controller
{
    function AboutCompanyIndex(){
        return view('SiteInfo/AboutCompany');
    }
    function AboutUsIndex(){
        return view('SiteInfo/AboutUs');
    }
    function AddressIndex(){
        return view('SiteInfo/Address');
    }
    function DeliveryNoticeIndex(){
        return view('SiteInfo/DeliveryNotice');
    }
    function PrivacyPolicyIndex(){
        return view('SiteInfo/PrivacyPolicy');
    }
    function PurchaseIndex(){
        return view('SiteInfo/Purchase');
    }
    function SocialLinkIndex(){
        return view('SiteInfo/SocialLink');
    }
    function TermsIndex(){
        return view('SiteInfo/Terms');
    }


    function getSiteInfoData(){
        $result = json_encode(SiteInfoModel::where('id',"1")->get(),true);
        return $result;
    }


    function SiteInfoUpdate(Request $request){
        $about = $request->input('about');
        $terms = $request->input('terms');
        $ploicy = $request->input('ploicy');
        $purchase_guide = $request->input('purchase_guide');
        $about_company = $request->input('about_company');
        $address = $request->input('address');
        $android_app_link = $request->input('android_app_link');
        $ios_app_link = $request->input('ios_app_link');
        $facebook_link = $request->input('facebook_link');
        $twitter_link = $request->input('twitter_link');
        $instagram_link = $request->input('instagram_link');
        $delivery_notice = $request->input('delivery_notice');

        $result = SiteInfoModel::where('id',"1")->update([
            'about' => $about,
            'terms' => $terms,
            'ploicy' => $ploicy,
            'purchase_guide' => $purchase_guide,
            'about_company' => $about_company,
            'address' => $address,
            'android_app_link' => $android_app_link,
            'ios_app_link' => $ios_app_link,
            'facebook_link' => $facebook_link,
            'twitter_link' => $twitter_link,
            'instagram_link' => $instagram_link,
            'delivery_notice' => $delivery_notice
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }

    function AboutUsUpdate(Request $request){
        $about = $request->input('about');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'about' => $about,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function PrivacyPolicyUpdate(Request $request){
        $ploicy = $request->input('ploicy');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'ploicy' => $ploicy,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function PurchaseUpdate(Request $request){
        $purchase_guide = $request->input('purchase_guide');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'purchase_guide' => $purchase_guide,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }



    function TermsUpdate(Request $request){
        $terms = $request->input('terms');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'terms' => $terms,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function AddressUpdate(Request $request){
        $address = $request->input('address');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'address' => $address,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function AboutCompanyUpdate(Request $request){
        $about_company = $request->input('about_company');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'about_company' => $about_company,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function DeliveryNoticeUpdate(Request $request){
        $delivery_notice = $request->input('delivery_notice');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'delivery_notice' => $delivery_notice,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function FacebookLinkUpdate(Request $request){
        $facebook_link = $request->input('facebook_link');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'facebook_link' => $facebook_link,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function TwitterLinkUpdate(Request $request){
        $twitter_link = $request->input('twitter_link');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'twitter_link' => $twitter_link,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function LinkedinLinkUpdate(Request $request){
        $instagram_link = $request->input('instagram_link');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'instagram_link' => $instagram_link,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }



    function AndroidLinkUpdate(Request $request){
        $android_app_link = $request->input('android_app_link');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'android_app_link' => $android_app_link,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }


    function IosLinkUpdate(Request $request){
        $ios_app_link = $request->input('ios_app_link');
        $result = SiteInfoModel::where('id','=',"1")->update([
            'ios_app_link' => $ios_app_link,
        ]);
        if ($result == true) {
            return 1;
        } else {
            return 0;
        }
    }
}
