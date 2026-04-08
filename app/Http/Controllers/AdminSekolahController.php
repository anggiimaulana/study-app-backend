<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Task;
use App\Models\Complaint;
use App\Models\TeacherEvaluation;
use Illuminate\Support\Facades\Auth;
class AdminSekolahController extends Controller
{
    public function index()
    {
        $schoolId = Auth::user()->school_id;
        $stats = [
            'students' => Student::where('school_id', $schoolId)->count(),
            'teachers' => Teacher::where('school_id', $schoolId)->count(),
            'tasks' => Task::where('school_id', $schoolId)->count(),
            'complaints' => Complaint::where('school_id', $schoolId)->count(),
        ];
        $teachers = Teacher::where('school_id', $schoolId)->with('user')->get()->map(function($teacher) {
            $teacher->average_rating = round($teacher->averageRating(), 1);
            return $teacher;
        })->sortByDesc('average_rating');
        return view('dashboards.admin_sekolah', compact('stats', 'teachers'));
    }

    public function data_master() { return view('dashboards.subpages.generic', ['title' => 'Data Pegawai & Murid', 'role' => 'admin_sekolah']); }
    public function manajemen_cbt() { return view('dashboards.subpages.generic', ['title' => 'Manajemen Ujian CBT', 'role' => 'admin_sekolah']); }
    public function materi() { return view('dashboards.subpages.generic', ['title' => 'Tugas & Materi', 'role' => 'admin_sekolah']); }
    public function aduan_masuk() { return view('dashboards.subpages.generic', ['title' => 'Laporan Aduan', 'role' => 'admin_sekolah']); }
    public function siaran_informasi() { return view('dashboards.subpages.generic', ['title' => 'Sistem Pengumuman', 'role' => 'admin_sekolah']); }
}

