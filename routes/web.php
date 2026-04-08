<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WebAuthController;
use App\Http\Controllers\SuperAdminController;
use App\Http\Controllers\SchoolAdminController;
use App\Http\Controllers\TeacherController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\AdmissionController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\LibrarianController;
use App\Http\Controllers\AcademicController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\FinanceController;
use App\Http\Controllers\GuidanceController;

Route::get('/', function () {
    return redirect('/login');
});

Route::get('/login', [WebAuthController::class, 'showLogin'])->name('login');
Route::post('/login', [WebAuthController::class, 'login']);
Route::post('/logout', [WebAuthController::class, 'logout'])->name('logout');

Route::middleware('role:admission')->group(function () {
        Route::get('/admission/dashboard', [AdmissionController::class, 'index'])->name('admission.dashboard');
        Route::get('/admission/main-dashboard', [AdmissionController::class, 'page_main_dashboard'])->name('admission.main-dashboard');
        Route::get('/admission/operational-menu', [AdmissionController::class, 'page_operational_menu'])->name('admission.operational-menu');
        Route::get('/admission/report', [AdmissionController::class, 'page_report'])->name('admission.report');
});

Route::middleware('role:career')->group(function () {
Route::get('/career/dashboard', [CareerController::class, 'index'])->name('career.dashboard');
        Route::get('/career/job-vacancies', [\App\Http\Controllers\CareerController::class, 'job_vacancies'])->name('career.job-vacancies');
        Route::get('/career/candidate', [\App\Http\Controllers\CareerController::class, 'candidate'])->name('career.candidate');
        Route::get('/career/partner', [\App\Http\Controllers\CareerController::class, 'partner'])->name('career.partner');
});

Route::middleware('role:librarian')->group(function () {
        Route::get('/librarian/dashboard', [LibrarianController::class, 'index'])->name('librarian.dashboard');
        Route::get('/librarian/main-dashboard', [LibrarianController::class, 'page_main_dashboard'])->name('librarian.main-dashboard');
        Route::get('/librarian/operational-menu', [LibrarianController::class, 'page_operational_menu'])->name('librarian.operational-menu');
        Route::get('/librarian/report', [LibrarianController::class, 'page_report'])->name('librarian.report');
});

Route::middleware('role:academic')->group(function () {
        Route::get('/academic/dashboard', [AcademicController::class, 'index'])->name('academic.dashboard');
        Route::get('/academic/main-dashboard', [AcademicController::class, 'page_main_dashboard'])->name('academic.main-dashboard');
        Route::get('/academic/operational-menu', [AcademicController::class, 'page_operational_menu'])->name('academic.operational-menu');
        Route::get('/academic/report', [AcademicController::class, 'page_report'])->name('academic.report');
});

Route::middleware('role:department')->group(function () {
        Route::get('/department/dashboard', [DepartmentController::class, 'index'])->name('department.dashboard');
        Route::get('/department/main-dashboard', [DepartmentController::class, 'page_main_dashboard'])->name('department.main-dashboard');
        Route::get('/department/operational-menu', [DepartmentController::class, 'page_operational_menu'])->name('department.operational-menu');
        Route::get('/department/report', [DepartmentController::class, 'page_report'])->name('department.report');
});

Route::middleware('role:finance')->group(function () {
Route::get('/finance/dashboard', [FinanceController::class, 'index'])->name('finance.dashboard');
        Route::get('/finance/billing', [\App\Http\Controllers\FinanceController::class, 'billing'])->name('finance.billing');
        Route::get('/finance/cash', [\App\Http\Controllers\FinanceController::class, 'cash'])->name('finance.cash');
});

Route::middleware('role:guidance')->group(function () {
Route::get('/guidance/dashboard', [GuidanceController::class, 'index'])->name('guidance.dashboard');
        Route::get('/guidance/analysis', [\App\Http\Controllers\GuidanceController::class, 'analysis'])->name('guidance.analysis');
        Route::get('/guidance/counseling-schedule', [\App\Http\Controllers\GuidanceController::class, 'counseling_schedule'])->name('guidance.counseling-schedule');
        Route::get('/guidance/myfess-insight', [\App\Http\Controllers\GuidanceController::class, 'myfess_insight'])->name('guidance.myfess-insight');
});

Route::middleware('role:super-admin')->group(function () {
        Route::get('/super-admin/dashboard', [SuperAdminController::class, 'index'])->name('super_admin.dashboard');
        Route::get('/super-admin/schools', [SuperAdminController::class, 'schools'])->name('super_admin.schools');
        Route::get('/super-admin/billing', [SuperAdminController::class, 'billing'])->name('super_admin.billing');
        Route::get('/super-admin/monitoring', [SuperAdminController::class, 'monitoring'])->name('super_admin.monitoring');
        Route::get('/super-admin/settings', [SuperAdminController::class, 'settings'])->name('super_admin.settings');
});

Route::middleware('role:school-admin')->group(function () {
Route::get('/admin/dashboard', [SchoolAdminController::class, 'index'])->name('school-admin.dashboard');
        Route::get('/school-admin/master-data', [\App\Http\Controllers\SchoolAdminController::class, 'master_data'])->name('school-admin.master-data');
        Route::get('/school-admin/cbt-management', [\App\Http\Controllers\SchoolAdminController::class, 'cbt_management'])->name('school-admin.cbt-management');
        Route::get('/school-admin/material', [\App\Http\Controllers\SchoolAdminController::class, 'material'])->name('school-admin.material');
        Route::get('/school-admin/incoming-complaint', [\App\Http\Controllers\SchoolAdminController::class, 'incoming_complaint'])->name('school-admin.incoming-complaint');
        Route::get('/school-admin/broadcast', [\App\Http\Controllers\SchoolAdminController::class, 'broadcast'])->name('school-admin.broadcast');
});

Route::middleware('role:teacher')->group(function () {
Route::get('/teacher/dashboard', [TeacherController::class, 'index'])->name('teacher.dashboard');
        Route::get('/teacher/task-management', [\App\Http\Controllers\TeacherController::class, 'task_management'])->name('teacher.task-management');
        Route::get('/teacher/cbt-grading', [\App\Http\Controllers\TeacherController::class, 'cbt_grading'])->name('teacher.cbt-grading');
        Route::get('/teacher/teaching-schedule', [\App\Http\Controllers\TeacherController::class, 'teaching_schedule'])->name('teacher.teaching-schedule');
        Route::get('/teacher/student-evaluation', [\App\Http\Controllers\TeacherController::class, 'student_evaluation'])->name('teacher.student-evaluation');
        Route::get('/teacher/information', [\App\Http\Controllers\TeacherController::class, 'information'])->name('teacher.information');
        Route::get('/teacher/myfess-moderation', [\App\Http\Controllers\TeacherController::class, 'myfess_moderation'])->name('teacher.myfess-moderation');
});

Route::middleware('role:student')->group(function () {
Route::get('/student/dashboard', [StudentController::class, 'index'])->name('student.dashboard');
        Route::get('/student/task-exam', [\App\Http\Controllers\StudentController::class, 'task_exam'])->name('student.task-exam');
        Route::get('/student/class-schedule', [\App\Http\Controllers\StudentController::class, 'class_schedule'])->name('student.class-schedule');
        Route::get('/student/study-result', [\App\Http\Controllers\StudentController::class, 'study_result'])->name('student.study-result');
        Route::get('/student/myfess', [\App\Http\Controllers\StudentController::class, 'myfess'])->name('student.myfess');
        Route::get('/student/jobs', [\App\Http\Controllers\StudentController::class, 'jobs'])->name('student.jobs');
        Route::get('/student/announcement', [\App\Http\Controllers\StudentController::class, 'announcement'])->name('student.announcement');
        Route::get('/student/my-complaint', [\App\Http\Controllers\StudentController::class, 'my_complaint'])->name('student.my-complaint');
});
