<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Task;
use App\Models\Exam;
use App\Models\TeacherEvaluation;
class GuruController extends Controller
{
    public function index()
    {
        $teacher = Auth::user()->teacher;
        if (!$teacher) abort(403, 'Akses ditolak: Anda belum terdaftar sebagai guru.');
        $stats = [
            'tasks_given' => Task::where('teacher_id', $teacher->id)->count(),
            'exams_given' => Exam::where('teacher_id', $teacher->id)->count(),
            'average_rating' => round($teacher->averageRating(), 1),
            'reviews_count' => $teacher->evaluations()->count(),
        ];
        $recentTasks = Task::where('teacher_id', $teacher->id)->latest()->take(5)->get();
        $evaluations = TeacherEvaluation::where('teacher_id', $teacher->id)->latest()->take(10)->with('student.user')->get();
        return view('dashboards.guru', compact('stats', 'recentTasks', 'evaluations'));
    }

    public function manajemen_tugas() { return view('dashboards.subpages.generic', ['title' => 'Manajemen Tugas', 'role' => 'guru']); }
    public function penilaian_cbt() { return view('dashboards.subpages.generic', ['title' => 'Penilaian CBT', 'role' => 'guru']); }
    public function jadwal_mengajar() { return view('dashboards.subpages.generic', ['title' => 'Jadwal Mengajar', 'role' => 'guru']); }
    public function evaluasi_siswa() { return view('dashboards.subpages.generic', ['title' => 'Evaluasi Siswa', 'role' => 'guru']); }
    public function informasi() { return view('dashboards.subpages.generic', ['title' => 'Informasi & Pengumuman', 'role' => 'guru']); }
    public function moderasi_myfess() { return view('dashboards.subpages.generic', ['title' => 'Moderasi MyFess', 'role' => 'guru']); }
}

