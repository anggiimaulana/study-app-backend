<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Handle user login.
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (! $user || ! Hash::check($request->password, $user->password)) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized. Invalid email or password.',
            ], 401);
        }

        // Single session enforcement: Force logout everywhere else by deleting all existing tokens
        // Ensure notification settings exist (Integration Fix)
        $user->notificationSettings()->firstOrCreate([]);

        $user->tokens()->delete();

        // Create new token
        $token = $user->createToken('mobile-auth-token')->plainTextToken;

        return response()->json([
            'status' => 'success',
            'message' => 'Login successful',
            'data' => [
                'user' => $user->load('student', 'school'), // load relations that might be needed
                'token' => $token,
            ]
        ], 200);
    }

    /**
     * Handle user logout.
     */
    public function logout(Request $request)
    {
        // Revoke the token that was used to authenticate the current request
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ], 200);
    }

    /**
     * Get authed user profile.
     */
    public function profile(Request $request)
    {
        return response()->json([
            'status' => 'success',
            'data' => $request->user()->load('student.classroom', 'student.major', 'school'),
        ]);
    }
}
