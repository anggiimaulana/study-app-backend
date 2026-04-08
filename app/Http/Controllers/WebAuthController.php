<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class WebAuthController extends Controller
{
    public function showLogin()
    {
        if (Auth::check()) {
            return $this->redirectBasedOnRole(Auth::user()->role);
        }
        return \Inertia\Inertia::render('Auth/Login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($credentials, $request->boolean('remember'))) {
            $request->session()->regenerate();
            
            // Single session enforcement: Force logout other devices!
            Auth::logoutOtherDevices($request->password);

            $role = Auth::user()->role;
            return clone $this->redirectBasedOnRole($role);
        }

        return back()->withErrors([
            'email' => 'Email atau password yang Anda masukkan salah.',
        ])->onlyInput('email');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/login')->with('status', 'Anda telah berhasil logout.');
    }

    private function redirectBasedOnRole($role)
    {
        if ($role === 'super-admin') {
            return redirect()->route('super_admin.dashboard');
        } elseif ($role === 'school-admin') {
            return redirect()->route('school-admin.dashboard');
        } elseif ($role === 'teacher') {
            return redirect()->route('teacher.dashboard');
        } elseif ($role === 'student') {
            return redirect()->route('student.dashboard');
        } elseif ($role === 'guidance') {
            return redirect()->route('guidance.dashboard');
        } elseif ($role === 'finance') {
            return redirect()->route('finance.dashboard');
        } elseif ($role === 'department') {
            return redirect()->route('department.dashboard');
        } elseif ($role === 'academic') {
            return redirect()->route('academic.dashboard');
        } elseif ($role === 'librarian') {
            return redirect()->route('librarian.dashboard');
        } elseif ($role === 'career') {
            return redirect()->route('career.dashboard');
        } elseif ($role === 'admission') {
            return redirect()->route('admission.dashboard');
        } else {
            Auth::logout();
            return redirect('/login')->with('error', 'Role tidak dikenali.');
        }
    }
}
