<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiController;
use App\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('welcome');
});

Route::get('/admin/{any?}', function () {
    return view('welcome');
})->where('any', '.*');

// API Routes
Route::prefix('api')->group(function () {
    // Authentication Routes
    Route::prefix('auth')->group(function () {
        Route::post('/login', [AuthController::class, 'login']);
        Route::get('/me', [AuthController::class, 'me']);
        Route::post('/logout', [AuthController::class, 'logout']);
    });

    Route::get('/projects', [ApiController::class, 'getProjects']);
    Route::get('/projects/{slug}', [ApiController::class, 'getProjectBySlug']);
    Route::get('/company', [ApiController::class, 'getCompanyInfo']);
    Route::post('/contact', [ApiController::class, 'storeInquiry']);

    // Public Feedback
    Route::get('/feedbacks', [ApiController::class, 'getFeedbacks']);
    Route::post('/feedback', [ApiController::class, 'storeFeedback']);

    // Admin Portal Endpoints
    Route::prefix('admin')->group(function () {
        Route::get('/stats', [ApiController::class, 'getAdminStats']);
        Route::get('/inquiries', [ApiController::class, 'getAdminInquiries']);
        Route::put('/inquiries/{id}', [ApiController::class, 'updateInquiry']);
        Route::delete('/inquiries/{id}', [ApiController::class, 'deleteInquiry']);
        Route::get('/feedbacks', [ApiController::class, 'getAdminFeedbacks']);
        Route::put('/feedbacks/{id}', [ApiController::class, 'updateFeedback']);
        Route::delete('/feedbacks/{id}', [ApiController::class, 'deleteFeedback']);
    });
});
