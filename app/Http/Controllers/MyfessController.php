<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MyfessPost;
use App\Models\MyfessLike;
use App\Models\MyfessComment;

class MyfessController extends Controller
{
    public function index(Request $request)
    {
        $posts = MyfessPost::with(['student.user'])
            ->where('status', 'published')
            ->latest()
            ->paginate(15);

        return response()->json([
            'status' => 'success',
            'data' => $posts->through(fn($post) => $this->formatPost($post, $request->user())),
            'meta' => [
                'current_page' => $posts->currentPage(),
                'last_page' => $posts->lastPage(),
                'total' => $posts->total(),
            ],
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'content'      => 'required|string|min:5|max:500',
            'is_anonymous' => 'boolean',
            'tags'         => 'nullable|array|max:5',
            'tags.*'       => 'string|max:30',
        ]);

        $student = $request->user()->student;

        if (!$student) {
            return response()->json([
                'status'  => 'error',
                'message' => 'Hanya siswa yang dapat membuat postingan.',
            ], 403);
        }

        $post = MyfessPost::create([
            'school_id'    => $student->school_id,
            'student_id'   => $student->id,
            'content'      => $validated['content'],
            'is_anonymous' => $validated['is_anonymous'] ?? true,
            'tags'         => $validated['tags'] ?? [],
            'status'       => 'published',
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => 'Postingan berhasil dibuat.',
            'data'    => $this->formatPost($post->load('student.user'), $request->user()),
        ], 201);
    }

    public function show(Request $request, $id)
    {
        $post = MyfessPost::with(['student.user', 'comments.user'])->find($id);

        if (!$post) {
            return response()->json(['status' => 'error', 'message' => 'Postingan tidak ditemukan.'], 404);
        }

        return response()->json([
            'status' => 'success',
            'data'   => $this->formatPost($post, $request->user()),
        ]);
    }

    public function update(Request $request, $id)
    {
        $post = MyfessPost::findOrFail($id);
        $user = $request->user();

        $isOwner   = $post->student_id === $user->student?->id;
        $isModerator = in_array($user->role, ['teacher', 'school-admin', 'super-admin', 'guidance']);

        if (!$isOwner && !$isModerator) {
            return response()->json(['status' => 'error', 'message' => 'Tidak memiliki izin.'], 403);
        }

        if ($isModerator && !$isOwner) {
            $validated = $request->validate([
                'status' => 'required|in:published,archived,flagged',
            ]);
            $post->update(['status' => $validated['status']]);
        } elseif ($isOwner) {
            $validated = $request->validate([
                'content' => 'sometimes|string|min:5|max:500',
                'tags'    => 'nullable|array|max:5',
            ]);
            $post->update($validated);
        }

        return response()->json([
            'status'  => 'success',
            'message' => 'Postingan berhasil diperbarui.',
            'data'    => $this->formatPost($post->fresh()->load('student.user'), $user),
        ]);
    }

    public function destroy(Request $request, $id)
    {
        $post = MyfessPost::findOrFail($id);
        $user = $request->user();

        $isOwner     = $post->student_id === $user->student?->id;
        $isModerator = in_array($user->role, ['teacher', 'school-admin', 'super-admin', 'guidance']);

        if (!$isOwner && !$isModerator) {
            return response()->json(['status' => 'error', 'message' => 'Tidak memiliki izin.'], 403);
        }

        $post->delete();

        return response()->json(['status' => 'success', 'message' => 'Postingan berhasil dihapus.']);
    }

    public function toggleLike(Request $request, $id)
    {
        $post = MyfessPost::findOrFail($id);
        $userId = $request->user()->id;

        $existing = MyfessLike::where('myfess_post_id', $id)
            ->where('user_id', $userId)
            ->first();

        if ($existing) {
            $existing->delete();
            $liked = false;
        } else {
            MyfessLike::create(['myfess_post_id' => $id, 'user_id' => $userId]);
            $liked = true;
        }

        $count = MyfessLike::where('myfess_post_id', $id)->count();

        return response()->json([
            'status' => 'success',
            'liked'  => $liked,
            'count'  => $count,
        ]);
    }

    public function storeComment(Request $request, $id)
    {
        $post = MyfessPost::findOrFail($id);

        $validated = $request->validate([
            'content' => 'required|string|min:1|max:300',
        ]);

        $comment = MyfessComment::create([
            'myfess_post_id' => $id,
            'user_id'        => $request->user()->id,
            'content'        => $validated['content'],
        ]);

        return response()->json([
            'status'  => 'success',
            'message' => 'Komentar berhasil ditambahkan.',
            'data'    => $comment->load('user:id,name,avatar'),
        ], 201);
    }

    protected function formatPost(MyfessPost $post, $authUser = null)
    {
        $likesCount    = MyfessLike::where('myfess_post_id', $post->id)->count();
        $commentsCount = MyfessComment::where('myfess_post_id', $post->id)->count();
        $isLiked       = $authUser
            ? MyfessLike::where('myfess_post_id', $post->id)->where('user_id', $authUser->id)->exists()
            : false;

        return [
            'id'             => $post->id,
            'content'        => $post->content,
            'is_anonymous'   => $post->is_anonymous,
            'status'         => $post->status,
            'tags'           => $post->tags ?? [],
            'likes_count'    => $likesCount,
            'comments_count' => $commentsCount,
            'is_liked'       => $isLiked,
            'created_at'     => $post->created_at,
            'student'        => $post->is_anonymous ? null : [
                'user' => $post->student?->user ? [
                    'name'   => $post->student->user->name,
                    'avatar' => $post->student->user->avatar,
                ] : null,
            ],
        ];
    }
}