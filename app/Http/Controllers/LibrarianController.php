<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LibrarianController extends Controller
{
    public function index()
    {
        $schoolId = \Illuminate\Support\Facades\Auth::user()->school_id;
        $stats = [
            'total_books' => \App\Models\LibraryBook::where('school_id', $schoolId)->count(),
            'active_borrowings' => \App\Models\LibraryBorrowing::where('school_id', $schoolId)->where('status', 'borrowed')->count(),
            'overdue_books' => \App\Models\LibraryBorrowing::where('school_id', $schoolId)->where('status', 'borrowed')->where('return_date', '<', now())->count(),
        ];
        
        $recentBorrowings = \App\Models\LibraryBorrowing::where('school_id', $schoolId)->with(['student.user', 'book'])->latest()->take(10)->get();
        
        return \Inertia\Inertia::render('Librarian/Dashboard', [
            'stats' => $stats,
            'recentBorrowings' => $recentBorrowings
        ]);
    }
    
    
    
    public function page_main_dashboard() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Dashboard Utama', 'role' => 'librarian']); }
    public function page_operational_menu() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Menu Operasional', 'role' => 'librarian']); }
    public function page_report() { return \Inertia\Inertia::render('GenericPage', ['title' => 'Laporan', 'role' => 'librarian']); }
}
