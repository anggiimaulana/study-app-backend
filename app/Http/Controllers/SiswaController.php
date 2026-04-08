<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Task;
use App\Models\Schedule;
use App\Models\Grade;
class SiswaController extends Controller
{
    public function index()
    {
        $student = Auth::user()->student;
        if (!$student) abort(403, 'Akses ditolak: Anda belum terdaftar sebagai siswa.');
        $stats = [
            'active_tasks' => Task::where('classroom_id', $student->classroom_id)->count(),
            'schedules' => Schedule::where('classroom_id', $student->classroom_id)->count(),
            'total_grades' => Grade::where('student_id', $student->id)->count(),
        ];
        $schedules = Schedule::where('classroom_id', $student->classroom_id)->with('subject', 'teacher.user')->orderBy('day_of_week')->orderBy('start_time')->get();
        $tasks = Task::where('classroom_id', $student->classroom_id)->with('subject')->latest()->take(5)->get();
        return view('dashboards.siswa', compact('stats', 'schedules', 'tasks'));
    }

    public function tugas_ujian() { return view('dashboards.subpages.generic', ['title' => 'Tugas & Ujian', 'role' => 'siswa']); }
    public function jadwal_kelas() { return view('dashboards.subpages.generic', ['title' => 'Jadwal Kelas', 'role' => 'siswa']); }
    public function hasil_studi() { return view('dashboards.subpages.generic', ['title' => 'Hasil Studi', 'role' => 'siswa']); }
    public function myfess() { return view('dashboards.subpages.generic', ['title' => 'Ruang Aman (MyFess)', 'role' => 'siswa']); }
    public function pekerjaan() { return view('dashboards.subpages.generic', ['title' => 'Portal Loker', 'role' => 'siswa']); }
    public function pengumuman() { return view('dashboards.subpages.generic', ['title' => 'Pengumuman', 'role' => 'siswa']); }
    public function aduanku() { return view('dashboards.subpages.generic', ['title' => 'Aduanku', 'role' => 'siswa']); }
}

