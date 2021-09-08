<?php

use App\Http\Controllers\api\ClassController;
use App\Http\Controllers\api\ClassroomController;
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
Route::get('/studentClassroom', [StudentController::class, 'student']);

Route::get('/class', [ClassController::class, 'index']);
Route::post('/class/save', [ClassController::class, 'save']);
Route::post('/class/update', [ClassController::class, 'update']);
Route::delete('/class/delete/{id}', [ClassController::class, 'delete']);

Route::get('/classroom', [ClassroomController::class, 'index']);
Route::post('/classroom/save', [ClassroomController::class, 'save']);
Route::delete('/classroom/delete/{id}', [ClassroomController::class, 'delete']);
