<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
class FinanceController extends Controller
{
    public function index()
    {
        $schoolId = \Illuminate\Support\Facades\Auth::user()->school_id;
        $stats = [
            'pending_bills' => \App\Models\Payment::where('school_id', $schoolId)->where('status', 'pending')->count(),
            'monthly_revenue' => \App\Models\Payment::where('school_id', $schoolId)->where('status', 'paid')->whereMonth('created_at', now()->month)->sum('amount'),
            'total_students_billed' => \App\Models\Payment::where('school_id', $schoolId)->distinct('student_id')->count(),
        ];
        
        $recentPayments = \App\Models\Payment::where('school_id', $schoolId)->with('student.user')->latest()->take(10)->get();
        
        return \Inertia\Inertia::render('Finance/Dashboard', [
            'stats' => $stats,
            'recentPayments' => $recentPayments
        ]);
    }

    public function billing() { return \Inertia\Inertia::render('GenericPage', ['title' => 'SPP & Tagihan', 'role' => 'finance']); }
    public function cash() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Riwayat Kas', 'role' => 'finance']); }
}

