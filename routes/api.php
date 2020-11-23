<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\Api\ApiMenuController;
use  App\Http\Controllers\Api\ApiArticleController;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('menus', ApiMenuController::class);
Route::get('articles/hot',[ApiArticleController::class,'getArticleHot'])->name('articles.hot');
Route::apiResource('articles', ApiArticleController::class);
