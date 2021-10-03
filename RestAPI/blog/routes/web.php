<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use App\Http\Controllers\SslCommerzPaymentController;

$router->get('/', function () use ($router) {
    return view('exampleEasycheckout');
});

/*
$router->get('/', function () use ($router) {
    return $router->app->version();
});
*/

$router->get('/SendVisitorDetails', ['middleware'=>'auth','uses'=>'VisitorController@SendVisitorDetails']);
$router->post('/SendContactDetails', ['middleware'=>'auth','uses'=>'ContactController@SendContactDetails']);
$router->get('/SendSiteInfo', ['middleware'=>'auth','uses'=>'SiteInfoController@SendSiteInfo']);

$router->get('/SendCategoryDetails', ['middleware'=>'auth','uses'=>'CategoryDetailsController@SendCategoryDetails']);
$router->get('/ProductListRemark/{remark}', ['middleware'=>'auth','uses'=>'ProductListController@ProductListRemark']);
$router->get('/ProductListCategory/{Category}', ['middleware'=>'auth','uses'=>'ProductListController@ProductListCategory']);
$router->get('/ProductListSubCategory/{Category}/{SubCategory}', ['middleware'=>'auth','uses'=>'ProductListController@ProductListSubCategory']);
$router->get('/SendSliderInfo', ['middleware'=>'auth','uses'=>'SliderController@SendSliderInfo']);

$router->get('/ProductDetails/{code}', ['middleware'=>'auth','uses'=>'ProductDetailsController@ProductDetails']);
$router->get('/NotificationHistory', ['middleware'=>'auth','uses'=>'NotificationController@NotificationHistory']);
$router->get('/ProductBySearch/{key}', ['middleware'=>'auth','uses'=>'ProductListController@ProductBySearch']);
$router->get('/SuggestedProducts/{SubCategory}', ['middleware'=>'auth','uses'=>'ProductListController@SuggestedProducts']);


$router->post('/PostReview', ['middleware'=>'auth','uses'=>'ReviewController@PostReview']);
$router->get('/ReviewList/{Code}', ['middleware'=>'auth','uses'=>'ReviewController@ReviewList']);


$router->get('/UserLogin/{mobile_number}/{password}', ['middleware'=>'auth','uses'=>'UserLoginController@UserLogin']);

$router->post('/AddToCart', ['middleware'=>'auth','uses'=>'ProductOrderController@AddToCart']);
$router->get('/CartCount/{mobile}', ['middleware'=>'auth','uses'=>'ProductOrderController@CartCount']);
$router->get('/CartList/{mobile}', ['middleware'=>'auth','uses'=>'ProductOrderController@CartList']);
$router->get('/CartItemRemove/{id}', ['middleware'=>'auth','uses'=>'ProductOrderController@CartItemRemove']);
$router->get('/CartItemPlus/{id}/{quantity}/{price}', ['middleware'=>'auth','uses'=>'ProductOrderController@CartItemPlus']);
$router->get('/CartItemMinus/{id}/{quantity}/{price}', ['middleware'=>'auth','uses'=>'ProductOrderController@CartItemMinus']);
$router->post('/CartOrder', ['middleware'=>'auth','uses'=>'ProductOrderController@CartOrder']);
$router->get('/OrderListByUser/{mobile}', ['middleware'=>'auth','uses'=>'ProductOrderController@OrderListByUser']);


$router->get('/FavouriteCount/{mobile}', ['middleware'=>'auth','uses'=>'FavouriteController@FavouriteCount']);
$router->get('/AddFavourite/{mobile}/{product_code}', ['middleware'=>'auth','uses'=>'FavouriteController@addToFavourite']);
$router->get('/FavouriteItemRemove/{mobile}/{product_code}', ['middleware'=>'auth','uses'=>'FavouriteController@FavouriteItemRemove']);
$router->get('/FavouriteList/{mobile}', ['middleware'=>'auth','uses'=>'FavouriteController@FavouriteList']);


// SSLCOMMERZ Start
$router->get('/example1', ['middleware'=>'auth','uses'=>'SslCommerzPaymentController@exampleEasyCheckout']);
$router->get('/example2', ['middleware'=>'auth','uses'=>'SslCommerzPaymentController@exampleHostedCheckout']);

$router->post('/pay', ['middleware'=>'auth','uses'=>'SslCommerzPaymentController@index']);
$router->post('/pay-via-ajax', ['middleware'=>'auth','uses'=>'SslCommerzPaymentController@payViaAjax']);

$router->post('/success', ['middleware'=>'auth','uses'=>'SslCommerzPaymentController@success']);
$router->post('/fail', ['middleware'=>'auth','uses'=>'SslCommerzPaymentController@fail']);
$router->post('/cancel', ['middleware'=>'auth','uses'=>'SslCommerzPaymentController@cancel']);

$router->post('/ipn', ['middleware'=>'auth','uses'=>'SslCommerzPaymentController@ipn']);
//SSLCOMMERZ END

