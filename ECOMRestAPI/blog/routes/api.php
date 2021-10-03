<?php

use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FavouriteController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProductDetailsController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\ProductOrderController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\SliderController;
use App\Http\Controllers\UserLoginController;
use App\Http\Controllers\VisitorController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/SendVisitorDetails', [VisitorController::class,'SendVisitorDetails']);
Route::post('/SendContactDetails', [ContactController::class,'SendContactDetails']);
Route::get('/SendSiteInfo', [SiteInfoController::class,'SendSiteInfo']);

Route::get('/SendCategoryDetails', [CategoryDetailsController::class,'SendCategoryDetails']);
Route::get('/ProductListRemark/{remark}', [ProductListController::class,'ProductListRemark']);
Route::get('/ProductListCategory/{Category}', [ProductListController::class,'ProductListCategory']);
Route::get('/ProductListSubCategory/{Category}/{SubCategory}', [ProductListController::class,'ProductListSubCategory']);
Route::get('/SendSliderInfo', [SliderController::class,'SendSliderInfo']);

Route::get('/ProductDetails/{code}', [ProductDetailsController::class,'ProductDetails']);
Route::get('/NotificationHistory', [NotificationController::class,'NotificationHistory']);
Route::get('/ProductBySearch/{key}', [ProductListController::class,'ProductBySearch']);
Route::get('/SuggestedProducts/{SubCategory}', [ProductListController::class,'SuggestedProducts']);


Route::post('/PostReview', [ReviewController::class,'PostReview']);
Route::get('/ReviewList/{Code}', [ReviewController::class,'ReviewList']);






Route::get('/UserLogin/{mobile_number}/{password}', [UserLoginController::class,'UserLogin']);
Route::post('/UserProfileUpdate', [UserLoginController::class, 'UserProfileUpdate']);
Route::get('/GetUserData/{mobile_number}', [UserLoginController::class,'GetUserData']);




Route::post('/AddToCart', [ProductOrderController::class,'AddToCart']);
Route::get('/CartCount/{mobile}', [ProductOrderController::class,'CartCount']);
Route::get('/CartList/{mobile}', [ProductOrderController::class,'CartList']);
Route::get('/CartItemRemove/{id}', [ProductOrderController::class,'CartItemRemove']);
Route::get('/CartItemPlus/{id}/{quantity}/{price}', [ProductOrderController::class,'CartItemPlus']);
Route::get('/CartItemMinus/{id}/{quantity}/{price}', [ProductOrderController::class,'CartItemMinus']);
Route::post('/CartOrder', [ProductOrderController::class,'CartOrder']);
Route::get('/OrderListByUser/{mobile}', [ProductOrderController::class,'OrderListByUser']);



Route::get('/FavouriteCount/{mobile}', [FavouriteController::class,'FavouriteCount']);
Route::get('/AddFavourite/{mobile}/{product_code}', [FavouriteController::class,'addToFavourite']);
Route::get('/FavouriteItemRemove/{mobile}/{product_code}', [FavouriteController::class,'FavouriteItemRemove']);
Route::get('/FavouriteList/{mobile}', [FavouriteController::class,'FavouriteList']);


