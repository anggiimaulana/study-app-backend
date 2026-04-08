<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    /**
     * Tampilkan semua tugas (Select All / Index)
     */
    public function index(Request $request)
    {
        // Example: Only fetch tasks for the student's classroom
        $user = $request->user();
        
        $query = Task::with(['subject', 'teacher']);

        if ($user->role === 'siswa' && $user->student) {
            $query->where('classroom_id', $user->student->classroom_id);
        }

        $tasks = $query->latest()->get();

        return response()->json([
            'status' => 'success',
            'data' => $tasks
        ]);
    }

    /**
     * Tampilkan detail spesifik tugas (Select One / Show)
     */
    public function show($id)
    {
        $task = Task::with(['subject', 'teacher'])->find($id);

        if (!$task) {
            return response()->json([
                'status' => 'error',
                'message' => 'Task not found',
            ], 404);
        }

        return response()->json([
            'status' => 'success',
            'data' => $task
        ]);
    }

    /**
     * Insert data baru (Insert / Store)
     */
    public function store(Request $request)
    {
        // In a real scenario, restrict to Guru only.
        if ($request->user()->role !== 'guru') {
            return response()->json(['status' => 'error', 'message' => 'Unauthorized actions.'], 403);
        }

        $validated = $request->validate([
            'school_id' => 'required|exists:schools,id',
            'classroom_id' => 'required|exists:classrooms,id',
            'subject_id' => 'required|exists:subjects,id',
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|in:tugas,latihan',
            'due_date' => 'nullable|date',
            'file_url' => 'nullable|string',
        ]);

        $validated['teacher_id'] = $request->user()->teacher->id ?? null;

        $task = Task::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Task created successfully',
            'data' => $task
        ], 201);
    }

    /**
     * Update data (Update)
     */
    public function update(Request $request, $id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['status' => 'error', 'message' => 'Task not found'], 404);
        }

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'description' => 'sometimes|string',
            'type' => 'sometimes|in:tugas,latihan',
            'due_date' => 'sometimes|date',
            'file_url' => 'nullable|string',
            'status' => 'sometimes|string'
        ]);

        $task->update($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Task updated successfully',
            'data' => $task
        ]);
    }

    /**
     * Delete data (Delete)
     */
    public function destroy($id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['status' => 'error', 'message' => 'Task not found'], 404);
        }

        $task->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Task deleted successfully'
        ]);
    }
}
