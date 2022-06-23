<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ShopController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/books', [HomeController::class, 'getDiscountBook']);
Route::get('/recommendedbooks', [HomeController::class, 'getRecommendedBook']);
Route::get('/popularbooks', [HomeController::class, 'getPopularBook']);
Route::get('books/sale/{condition?}', [ShopController::class, 'sortByOnSale']);
Route::get('books/popular/{condition?}', [ShopController::class, 'sortPopularBook']);
Route::get('books/price/{condition?}', [ShopController::class, 'sortPriceBook']);


