<?php

use App\Http\Controllers\api\ClassController;
use App\Http\Controllers\api\StudentController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/student', [StudentController::class, 'index']);
Route::post('/student/save', [StudentController::class, 'save']);
Route::post('/student/update', [StudentController::class, 'update']);
Route::post('/student/delete', [StudentController::class, 'delete']);

Route::get('/class', [ClassController::class, 'index']);
Route::post('/class/save', [ClassController::class, 'save']);
