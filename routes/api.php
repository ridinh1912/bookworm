<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ShopController;
use App\Http\Controllers\ProductController;
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
Route::get('books/sale', [ShopController::class, 'sortByOnSale']);
Route::get('books/popular', [ShopController::class, 'sortPopularBook']);
Route::get('books/price/{condition?}', [ShopController::class, 'sortPriceBook']);
Route::get('books/filter', [ShopController::class, 'filter']);
Route::get('books/detail', [ShopController::class, 'getBookByID']);
Route::get('books/authors', [ShopController::class, 'getAuthorName']);
Route::get('books/category', [ShopController::class, 'getCategory']);
Route::get('books/reviews/{sort?}', [ProductController::class, 'getReviewByID']);
Route::get('books/reviews/{sort?}/condition', [ProductController::class, 'getReviewByRating']);


