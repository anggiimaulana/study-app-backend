<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebAuthController;
use App\Http\Controllers\SuperAdminController;
use App\Http\Controllers\AdminSekolahController;
use App\Http\Controllers\GuruController;
use App\Http\Controllers\SiswaController;
use App\Http\Controllers\PpdbController;

use App\Http\Controllers\BkkController;

use App\Http\Controllers\PerpustakawanController;

use App\Http\Controllers\AkademikController;

use App\Http\Controllers\JurusanController;

use App\Http\Controllers\KeuanganController;

use App\Http\Controllers\GuruBkController;


Route::get('/', function () {
    return redirect('/login');
});

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:guru_bk')->group(function () {
Route::get('/guru_bk/dashboard', [GuruBkController::class, 'index'])->name('guru_bk.dashboard');
        Route::get('/guru_bk/analisis', [\App\Http\Controllers\GuruBkController::class, 'analisis'])->name('guru_bk.analisis');
        Route::get('/guru_bk/jadwal_konseling', [\App\Http\Controllers\GuruBkController::class, 'jadwal_konseling'])->name('guru_bk.jadwal_konseling');
        Route::get('/guru_bk/myfess_insight', [\App\Http\Controllers\GuruBkController::class, 'myfess_insight'])->name('guru_bk.myfess_insight');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

Route::get('/login', [WebAuthController::class, 'showLogin'])->name('login');
Route::post('/login', [WebAuthController::class, 'login']);
Route::post('/logout', [WebAuthController::class, 'logout'])->name('logout');

Route::middleware(['auth', 'Illuminate\Session\Middleware\AuthenticateSession'])->group(function () {
    Route::middleware('role:super_admin')->group(function () {
        
        Route::get('/super-admin/dashboard', [SuperAdminController::class, 'index'])->name('super_admin.dashboard');
        Route::get('/super-admin/schools', [SuperAdminController::class, 'schools'])->name('super_admin.schools');
        Route::get('/super-admin/billing', [SuperAdminController::class, 'billing'])->name('super_admin.billing');
        Route::get('/super-admin/monitoring', [SuperAdminController::class, 'monitoring'])->name('super_admin.monitoring');
        Route::get('/super-admin/settings', [SuperAdminController::class, 'settings'])->name('super_admin.settings');

    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:guru_bk')->group(function () {
Route::get('/guru_bk/dashboard', [GuruBkController::class, 'index'])->name('guru_bk.dashboard');
        Route::get('/guru_bk/analisis', [\App\Http\Controllers\GuruBkController::class, 'analisis'])->name('guru_bk.analisis');
        Route::get('/guru_bk/jadwal_konseling', [\App\Http\Controllers\GuruBkController::class, 'jadwal_konseling'])->name('guru_bk.jadwal_konseling');
        Route::get('/guru_bk/myfess_insight', [\App\Http\Controllers\GuruBkController::class, 'myfess_insight'])->name('guru_bk.myfess_insight');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:admin_sekolah')->group(function () {
Route::get('/admin/dashboard', [AdminSekolahController::class, 'index'])->name('admin_sekolah.dashboard');
        Route::get('/admin_sekolah/data_master', [\App\Http\Controllers\AdminSekolahController::class, 'data_master'])->name('admin_sekolah.data_master');
        Route::get('/admin_sekolah/manajemen_cbt', [\App\Http\Controllers\AdminSekolahController::class, 'manajemen_cbt'])->name('admin_sekolah.manajemen_cbt');
        Route::get('/admin_sekolah/materi', [\App\Http\Controllers\AdminSekolahController::class, 'materi'])->name('admin_sekolah.materi');
        Route::get('/admin_sekolah/aduan_masuk', [\App\Http\Controllers\AdminSekolahController::class, 'aduan_masuk'])->name('admin_sekolah.aduan_masuk');
        Route::get('/admin_sekolah/siaran_informasi', [\App\Http\Controllers\AdminSekolahController::class, 'siaran_informasi'])->name('admin_sekolah.siaran_informasi');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:guru_bk')->group(function () {
Route::get('/guru_bk/dashboard', [GuruBkController::class, 'index'])->name('guru_bk.dashboard');
        Route::get('/guru_bk/analisis', [\App\Http\Controllers\GuruBkController::class, 'analisis'])->name('guru_bk.analisis');
        Route::get('/guru_bk/jadwal_konseling', [\App\Http\Controllers\GuruBkController::class, 'jadwal_konseling'])->name('guru_bk.jadwal_konseling');
        Route::get('/guru_bk/myfess_insight', [\App\Http\Controllers\GuruBkController::class, 'myfess_insight'])->name('guru_bk.myfess_insight');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:guru')->group(function () {
Route::get('/guru/dashboard', [GuruController::class, 'index'])->name('guru.dashboard');
        Route::get('/guru/manajemen_tugas', [\App\Http\Controllers\GuruController::class, 'manajemen_tugas'])->name('guru.manajemen_tugas');
        Route::get('/guru/penilaian_cbt', [\App\Http\Controllers\GuruController::class, 'penilaian_cbt'])->name('guru.penilaian_cbt');
        Route::get('/guru/jadwal_mengajar', [\App\Http\Controllers\GuruController::class, 'jadwal_mengajar'])->name('guru.jadwal_mengajar');
        Route::get('/guru/evaluasi_siswa', [\App\Http\Controllers\GuruController::class, 'evaluasi_siswa'])->name('guru.evaluasi_siswa');
        Route::get('/guru/informasi', [\App\Http\Controllers\GuruController::class, 'informasi'])->name('guru.informasi');
        Route::get('/guru/moderasi_myfess', [\App\Http\Controllers\GuruController::class, 'moderasi_myfess'])->name('guru.moderasi_myfess');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:guru_bk')->group(function () {
Route::get('/guru_bk/dashboard', [GuruBkController::class, 'index'])->name('guru_bk.dashboard');
        Route::get('/guru_bk/analisis', [\App\Http\Controllers\GuruBkController::class, 'analisis'])->name('guru_bk.analisis');
        Route::get('/guru_bk/jadwal_konseling', [\App\Http\Controllers\GuruBkController::class, 'jadwal_konseling'])->name('guru_bk.jadwal_konseling');
        Route::get('/guru_bk/myfess_insight', [\App\Http\Controllers\GuruBkController::class, 'myfess_insight'])->name('guru_bk.myfess_insight');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:siswa')->group(function () {
Route::get('/siswa/dashboard', [SiswaController::class, 'index'])->name('siswa.dashboard');
        Route::get('/siswa/tugas_ujian', [\App\Http\Controllers\SiswaController::class, 'tugas_ujian'])->name('siswa.tugas_ujian');
        Route::get('/siswa/jadwal_kelas', [\App\Http\Controllers\SiswaController::class, 'jadwal_kelas'])->name('siswa.jadwal_kelas');
        Route::get('/siswa/hasil_studi', [\App\Http\Controllers\SiswaController::class, 'hasil_studi'])->name('siswa.hasil_studi');
        Route::get('/siswa/myfess', [\App\Http\Controllers\SiswaController::class, 'myfess'])->name('siswa.myfess');
        Route::get('/siswa/pekerjaan', [\App\Http\Controllers\SiswaController::class, 'pekerjaan'])->name('siswa.pekerjaan');
        Route::get('/siswa/pengumuman', [\App\Http\Controllers\SiswaController::class, 'pengumuman'])->name('siswa.pengumuman');
        Route::get('/siswa/aduanku', [\App\Http\Controllers\SiswaController::class, 'aduanku'])->name('siswa.aduanku');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:guru_bk')->group(function () {
Route::get('/guru_bk/dashboard', [GuruBkController::class, 'index'])->name('guru_bk.dashboard');
        Route::get('/guru_bk/analisis', [\App\Http\Controllers\GuruBkController::class, 'analisis'])->name('guru_bk.analisis');
        Route::get('/guru_bk/jadwal_konseling', [\App\Http\Controllers\GuruBkController::class, 'jadwal_konseling'])->name('guru_bk.jadwal_konseling');
        Route::get('/guru_bk/myfess_insight', [\App\Http\Controllers\GuruBkController::class, 'myfess_insight'])->name('guru_bk.myfess_insight');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });
});

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:guru_bk')->group(function () {
Route::get('/guru_bk/dashboard', [GuruBkController::class, 'index'])->name('guru_bk.dashboard');
        Route::get('/guru_bk/analisis', [\App\Http\Controllers\GuruBkController::class, 'analisis'])->name('guru_bk.analisis');
        Route::get('/guru_bk/jadwal_konseling', [\App\Http\Controllers\GuruBkController::class, 'jadwal_konseling'])->name('guru_bk.jadwal_konseling');
        Route::get('/guru_bk/myfess_insight', [\App\Http\Controllers\GuruBkController::class, 'myfess_insight'])->name('guru_bk.myfess_insight');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:keuangan')->group(function () {
Route::get('/keuangan/dashboard', [KeuanganController::class, 'index'])->name('keuangan.dashboard');
        Route::get('/keuangan/tagihan', [\App\Http\Controllers\KeuanganController::class, 'tagihan'])->name('keuangan.tagihan');
        Route::get('/keuangan/kas', [\App\Http\Controllers\KeuanganController::class, 'kas'])->name('keuangan.kas');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:jurusan')->group(function () {
        Route::get('/jurusan/dashboard', [JurusanController::class, 'index'])->name('jurusan.dashboard');
    
        Route::get('/jurusan/dashboard_utama', [JurusanController::class, 'page_dashboard_utama'])->name('jurusan.dashboard_utama');
        Route::get('/jurusan/menu_operasional', [JurusanController::class, 'page_menu_operasional'])->name('jurusan.menu_operasional');
        Route::get('/jurusan/laporan', [JurusanController::class, 'page_laporan'])->name('jurusan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:akademik')->group(function () {
        Route::get('/akademik/dashboard', [AkademikController::class, 'index'])->name('akademik.dashboard');
    
        Route::get('/akademik/dashboard_utama', [AkademikController::class, 'page_dashboard_utama'])->name('akademik.dashboard_utama');
        Route::get('/akademik/menu_operasional', [AkademikController::class, 'page_menu_operasional'])->name('akademik.menu_operasional');
        Route::get('/akademik/laporan', [AkademikController::class, 'page_laporan'])->name('akademik.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:perpustakawan')->group(function () {
        Route::get('/perpustakawan/dashboard', [PerpustakawanController::class, 'index'])->name('perpustakawan.dashboard');
    
        Route::get('/perpustakawan/dashboard_utama', [PerpustakawanController::class, 'page_dashboard_utama'])->name('perpustakawan.dashboard_utama');
        Route::get('/perpustakawan/menu_operasional', [PerpustakawanController::class, 'page_menu_operasional'])->name('perpustakawan.menu_operasional');
        Route::get('/perpustakawan/laporan', [PerpustakawanController::class, 'page_laporan'])->name('perpustakawan.laporan');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });

    Route::middleware('role:bkk')->group(function () {
Route::get('/bkk/dashboard', [BkkController::class, 'index'])->name('bkk.dashboard');
        Route::get('/bkk/loker', [\App\Http\Controllers\BkkController::class, 'loker'])->name('bkk.loker');
        Route::get('/bkk/kandidat', [\App\Http\Controllers\BkkController::class, 'kandidat'])->name('bkk.kandidat');
        Route::get('/bkk/mitra', [\App\Http\Controllers\BkkController::class, 'mitra'])->name('bkk.mitra');
    });

    Route::middleware('role:ppdb')->group(function () {
        Route::get('/ppdb/dashboard', [PpdbController::class, 'index'])->name('ppdb.dashboard');
    
        Route::get('/ppdb/dashboard_utama', [PpdbController::class, 'page_dashboard_utama'])->name('ppdb.dashboard_utama');
        Route::get('/ppdb/menu_operasional', [PpdbController::class, 'page_menu_operasional'])->name('ppdb.menu_operasional');
        Route::get('/ppdb/laporan', [PpdbController::class, 'page_laporan'])->name('ppdb.laporan');
    });
