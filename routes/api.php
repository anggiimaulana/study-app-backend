<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\TaskController;
use App\Http\Controllers\Api\AttendanceController;
use App\Http\Controllers\Api\CbtController;
use App\Http\Controllers\Api\MyfessController;
use App\Http\Controllers\Api\JobController;
use App\Http\Controllers\Api\LibraryController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\ComplaintController;
use App\Http\Controllers\Api\AnnouncementController;
use App\Http\Controllers\Api\ClassroomController;
use App\Http\Controllers\Api\TaskSubmissionController;

Route::prefix('v1')->group(function () {
    // Auth Routes
    Route::post('/login', [AuthController::class, 'login']);

    // Protected Routes
    Route::middleware(['auth:sanctum', 'throttle:api'])->group(function () {
        Route::post('/logout', [AuthController::class, 'logout']);
        Route::get('/profile', [AuthController::class, 'profile']);
        
        // Modules
        Route::apiResource('tasks', TaskController::class);
        Route::apiResource('attendances', AttendanceController::class);
        Route::apiResource('cbt', CbtController::class);
        Route::apiResource('myfess', MyfessController::class);
        Route::apiResource('jobs', JobController::class);
        Route::apiResource('library', LibraryController::class);
        Route::apiResource('payments', PaymentController::class);
        Route::apiResource('complaints', ComplaintController::class);
        Route::apiResource('announcements', AnnouncementController::class);
        Route::apiResource('classrooms', ClassroomController::class);
        Route::apiResource('task-submissions', TaskSubmissionController::class);
    });
});
