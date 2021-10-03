<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VisitorController;






//Admin Panel Home and Visitor Management
Route::get('/', [HomeController::class, 'HomeIndex'])->middleware('loginCheck');
Route::get('/visitor', [VisitorController::class, 'VisitorIndex'])->middleware('loginCheck');


//Admin Panel Category SubCategory Management
Route::get('/addCategory', [CategoryController::class, 'CategoryIndex'])->middleware('loginCheck');
Route::get('/SelectOptionCategory', [CategoryController::class, 'SelectOptionCategory'])->middleware('loginCheck');
Route::post('/SelectSubCategory', [CategoryController::class, 'SelectSubCategory'])->middleware('loginCheck');
Route::get('/SelectOptionSubCategory', [CategoryController::class, 'SelectOptionSubCategory'])->middleware('loginCheck');
Route::post('/AddCategoryList', [CategoryController::class, 'AddCategoryList'])->middleware('loginCheck');
Route::post('/AddSubCategoryList', [CategoryController::class, 'AddSubCategoryList'])->middleware('loginCheck');
Route::post('/DeleteCategory', [CategoryController::class, 'DeleteCategory'])->middleware('loginCheck');
Route::post('/DeleteSubCategory', [CategoryController::class, 'DeleteSubCategory'])->middleware('loginCheck');
Route::get('/getOrderList', [CategoryController::class, 'getOrderList'])->middleware('loginCheck');


//Admin Panel contact Management
Route::get('/contact', [ContactController::class, 'ContactIndex'])->middleware('loginCheck');
Route::get('/getContactsData', [ContactController::class, 'getContactsData'])->middleware('loginCheck');
Route::post('/ContactDelete', [ContactController::class, 'ContactDelete'])->middleware('loginCheck');


//Admin Panel Product Management
Route::get('/product', [ProductController::class, 'ProductIndex'])->middleware('loginCheck');
Route::get('/getProductData', [ProductController::class, 'getProductData'])->middleware('loginCheck');
Route::post('/ProductDelete', [ProductController::class, 'ProductDelete'])->middleware('loginCheck');
Route::post('/getProductDetails', [ProductController::class, 'getProductDetails'])->middleware('loginCheck');
Route::post('/getProductList', [ProductController::class, 'getProductList'])->middleware('loginCheck');
Route::post('/ProductListUpdate', [ProductController::class, 'ProductListUpdate'])->middleware('loginCheck');
Route::post('/ProductDetailsUpdate', [ProductController::class, 'ProductDetailsUpdate'])->middleware('loginCheck');
Route::post('/AddProductDetails', [ProductController::class, 'AddProductDetails'])->middleware('loginCheck');
Route::post('/AddProductList', [ProductController::class, 'AddProductList'])->middleware('loginCheck');


//Admin Panel Slider Management
Route::get('/Slider', [SliderController::class, 'SliderIndex'])->middleware('loginCheck');
Route::get('/getSliderData', [SliderController::class, 'getSliderData'])->middleware('loginCheck');
Route::post('/SliderDelete', [SliderController::class, 'SliderDelete'])->middleware('loginCheck');
Route::post('/getSliderDetails', [SliderController::class, 'getSliderDetails'])->middleware('loginCheck');
Route::post('/SliderUpdate', [SliderController::class, 'SliderUpdate'])->middleware('loginCheck');
Route::post('/AddSlider', [SliderController::class, 'AddSlider'])->middleware('loginCheck');


// Admin Photo Gallery
Route::get('/Photo', [PhotoController::class, 'PhotoIndex'])->middleware('loginCheck');
Route::post('/PhotoUpload', [PhotoController::class, 'PhotoUpload'])->middleware('loginCheck');
Route::get('/PhotoJSON', [PhotoController::class, 'PhotoJSON'])->middleware('loginCheck');
Route::get('/PhotoJSON1', [PhotoController::class, 'PhotoJSON1'])->middleware('loginCheck');
Route::get('/PhotoJSONByID/{id}', [PhotoController::class, 'PhotoJSONByID'])->middleware('loginCheck');
Route::post('/PhotoDelete', [PhotoController::class, 'PhotoDelete'])->middleware('loginCheck');


// Admin Panel Login and Logout Management
Route::get('/Login', [AdminController::class,'LoginIndex']);
Route::post('/onLogin', [AdminController::class,'onLogin']);
Route::get('/Logout', [AdminController::class,'onLogout'])->middleware('loginCheck');


// Admin Panel Admin profile Management
Route::get('/adminProfile', [AdminController::class, 'AdminProfile'])->middleware('loginCheck');
Route::get('/AdminUpdate', [AdminController::class,'AdminUpdate'])->middleware('loginCheck');
Route::post('/AdminUpdateData', [AdminController::class,'AdminUpdateData'])->middleware('loginCheck');
Route::get('/getAdminData', [AdminController::class, 'getAdminData'])->middleware('loginCheck');
Route::post('/AdminDelete', [AdminController::class, 'AdminDelete'])->middleware('loginCheck');
Route::post('/AddAdminProfile', [AdminController::class, 'AddAdminProfile'])->middleware('loginCheck');


// Admin Panel Admin Site Info Management
Route::get('/AboutCompany', [SiteInfoController::class, 'AboutCompanyIndex'])->middleware('loginCheck');
Route::get('/AboutUs', [SiteInfoController::class, 'AboutUsIndex'])->middleware('loginCheck');
Route::get('/Address', [SiteInfoController::class, 'AddressIndex'])->middleware('loginCheck');
Route::get('/DeliveryNotice', [SiteInfoController::class, 'DeliveryNoticeIndex'])->middleware('loginCheck');
Route::get('/PrivacyPolicy', [SiteInfoController::class, 'PrivacyPolicyIndex'])->middleware('loginCheck');
Route::get('/Purchase', [SiteInfoController::class, 'PurchaseIndex'])->middleware('loginCheck');
Route::get('/SocialLink', [SiteInfoController::class, 'SocialLinkIndex'])->middleware('loginCheck');
Route::get('/Terms', [SiteInfoController::class, 'TermsIndex'])->middleware('loginCheck');
Route::get('/getSiteInfoData', [SiteInfoController::class, 'getSiteInfoData'])->middleware('loginCheck');
Route::post('/SiteInfoUpdate', [SiteInfoController::class, 'SiteInfoUpdate'])->middleware('loginCheck');
Route::post('/AboutUsUpdate', [SiteInfoController::class, 'AboutUsUpdate'])->middleware('loginCheck');
Route::post('/PrivacyPolicyUpdate', [SiteInfoController::class, 'PrivacyPolicyUpdate'])->middleware('loginCheck');
Route::post('/PurchaseUpdate', [SiteInfoController::class, 'PurchaseUpdate'])->middleware('loginCheck');
Route::post('/TermsUpdate', [SiteInfoController::class, 'TermsUpdate'])->middleware('loginCheck');
Route::post('/AddressUpdate', [SiteInfoController::class, 'AddressUpdate'])->middleware('loginCheck');
Route::post('/AboutCompanyUpdate', [SiteInfoController::class, 'AboutCompanyUpdate'])->middleware('loginCheck');
Route::post('/DeliveryNoticeUpdate', [SiteInfoController::class, 'DeliveryNoticeUpdate'])->middleware('loginCheck');
Route::post('/FacebookLinkUpdate', [SiteInfoController::class, 'FacebookLinkUpdate'])->middleware('loginCheck');
Route::post('/TwitterLinkUpdate', [SiteInfoController::class, 'TwitterLinkUpdate'])->middleware('loginCheck');
Route::post('/LinkedinLinkUpdate', [SiteInfoController::class, 'LinkedinLinkUpdate'])->middleware('loginCheck');
Route::post('/AndroidLinkUpdate', [SiteInfoController::class, 'AndroidLinkUpdate'])->middleware('loginCheck');
Route::post('/IosLinkUpdate', [SiteInfoController::class, 'IosLinkUpdate'])->middleware('loginCheck');



// Admin Panel Review Management
Route::get('/Review', [ReviewController::class, 'ReviewIndex'])->middleware('loginCheck');
Route::get('/getReviewData', [ReviewController::class, 'getReviewData'])->middleware('loginCheck');
Route::post('/ReviewDelete', [ReviewController::class, 'ReviewDelete'])->middleware('loginCheck');
Route::post('/getReviewDetails', [ReviewController::class, 'getReviewDetails'])->middleware('loginCheck');


// Admin Panel Order Management
Route::get('/Order', [OrderController::class, 'OrderIndex'])->middleware('loginCheck');
Route::get('/getOrderData', [OrderController::class, 'getOrderData'])->middleware('loginCheck');
Route::post('/OrderDelete', [OrderController::class, 'OrderDelete'])->middleware('loginCheck');
Route::post('/OrderDetailsStatusUpdate', [OrderController::class, 'OrderDetailsStatusUpdate'])->middleware('loginCheck');
