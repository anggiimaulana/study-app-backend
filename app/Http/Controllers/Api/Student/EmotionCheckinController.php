<?php

namespace App\Http\Controllers\Api\Student;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEmotionCheckinRequest;
use App\Services\EmotionCheckinService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class EmotionCheckinController extends Controller
{
    protected EmotionCheckinService $service;

    public function __construct(EmotionCheckinService $service)
    {
        $this->service = $service;
    }

    public function index(Request $request): JsonResponse
    {
        $student = $request->user()->student;

        if (!$student) {
            return response()->json(['message' => 'Student not found.'], 404);
        }

        $cacheKey = "student_{$student->id}_checkin_history";

        $history = \Illuminate\Support\Facades\Cache::remember($cacheKey, now()->addDay(), function () use ($student) {
            return $student->emotionCheckins()->latest()->take(5)->get()->values()->all();
        });

        return response()->json(['data' => $history]);
    }

    public function store(StoreEmotionCheckinRequest $request): JsonResponse
    {
        $student = $request->user()->student;

        if (!$student) {
            return response()->json(['message' => 'Student not found.'], 404);
        }

        $checkin = $this->service->performCheckin($student, $request->validated());

        // Invalidate cache
        \Illuminate\Support\Facades\Cache::forget("student_{$student->id}_checkin_history");

        return response()->json([
            'message' => 'Check-in berhasil disimpan!',
            'data' => $checkin
        ], 201);
    }
}
