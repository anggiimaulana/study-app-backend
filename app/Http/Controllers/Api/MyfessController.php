<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MyfessPost;
use Illuminate\Support\Facades\Gate;

class MyfessController extends Controller
{
    public function index(Request $request)
    {
        $posts = MyfessPost::with(['student', 'student.user'])->latest()->paginate(15);
        return response()->json(['status' => 'success', 'data' => $posts]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'school_id' => 'required',
            'title' => 'nullable|string',
            'content' => 'required|string',
            'is_anonymous' => 'boolean',
            'tags' => 'nullable|array'
        ]);
        
        $validated['student_id'] = $request->user()->student->id ?? null;
        $validated['status'] = 'published';
        
        $post = MyfessPost::create($validated);
        
        // This is where we would trigger basic Laravel Event broadcasting (misal: NotificationEvent::dispatch($post))
        
        return response()->json(['status' => 'success',  'message' => 'Post created (Realtime events ready)', 'data' => $post]);
    }

    public function show($id)
    {
        $post = MyfessPost::with('student')->findOrFail($id);
        return response()->json(['status' => 'success', 'data' => $post]);
    }

    public function update(Request $request, $id)
    {
        $post = MyfessPost::findOrFail($id);
        $post->update($request->only(['title', 'content', 'status', 'tags']));
        return response()->json(['status' => 'success', 'data' => $post]);
    }

    public function destroy($id)
    {
        MyfessPost::destroy($id);
        return response()->json(['status' => 'success', 'message' => 'Deleted']);
    }
}
