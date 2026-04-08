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
        return view('auth.login');
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
        if ($role === 'super_admin') {
            return redirect()->route('super_admin.dashboard');
        } elseif ($role === 'admin_sekolah') {
            return redirect()->route('admin_sekolah.dashboard');
        } elseif ($role === 'guru') {
            return redirect()->route('guru.dashboard');
        } elseif ($role === 'siswa') {
            return redirect()->route('siswa.dashboard');
        } elseif ($role === 'guru_bk') {
            return redirect()->route('guru_bk.dashboard');
        } elseif ($role === 'keuangan') {
            return redirect()->route('keuangan.dashboard');
        } elseif ($role === 'jurusan') {
            return redirect()->route('jurusan.dashboard');
        } elseif ($role === 'akademik') {
            return redirect()->route('akademik.dashboard');
        } elseif ($role === 'perpustakawan') {
            return redirect()->route('perpustakawan.dashboard');
        } elseif ($role === 'bkk') {
            return redirect()->route('bkk.dashboard');
        } elseif ($role === 'ppdb') {
            return redirect()->route('ppdb.dashboard');
        } else {
            Auth::logout();
            return redirect('/login')->with('error', 'Role tidak dikenali.');
        }
    }
}
