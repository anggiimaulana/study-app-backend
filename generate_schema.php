<?php

$models = [
    'School' => [
        'table' => 'schools',
        'fields' => [
            '$table->string("name");',
            '$table->string("npsn")->nullable();',
            '$table->text("address")->nullable();',
            '$table->string("phone")->nullable();',
            '$table->string("email")->nullable();',
            '$table->string("website")->nullable();',
            '$table->string("logo")->nullable();',
            '$table->enum("status", ["active", "inactive"])->default("active");',
        ],
        'relations' => [
            'users' => 'hasMany(User::class)',
            'students' => 'hasMany(Student::class)',
            'teachers' => 'hasMany(Teacher::class)',
        ]
    ],
    'AcademicYear' => [
        'table' => 'academic_years',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->string("name");',
            '$table->enum("semester", ["ganjil", "genap"]);',
            '$table->boolean("is_active")->default(true);',
        ]
    ],
    'Major' => [
        'table' => 'majors',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->string("code");',
            '$table->string("name");',
            '$table->text("description")->nullable();',
        ]
    ],
    'Teacher' => [
        'table' => 'teachers',
        'fields' => [
            '$table->foreignId("user_id")->constrained("users")->cascadeOnDelete();',
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->string("nip")->nullable();',
            '$table->string("nuptk")->nullable();',
            '$table->enum("gender", ["L", "P"])->nullable();',
            '$table->string("phone")->nullable();',
            '$table->text("address")->nullable();',
        ]
    ],
    'Classroom' => [
        'table' => 'classrooms',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("major_id")->constrained("majors")->cascadeOnDelete();',
            '$table->foreignId("academic_year_id")->constrained("academic_years")->cascadeOnDelete();',
            '$table->foreignId("homeroom_teacher_id")->nullable()->constrained("teachers")->nullOnDelete();',
            '$table->integer("level");',
            '$table->string("name");',
        ]
    ],
    'Subject' => [
        'table' => 'subjects',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("major_id")->nullable()->constrained("majors")->nullOnDelete();',
            '$table->string("code");',
            '$table->string("name");',
            '$table->text("description")->nullable();',
        ]
    ],
    'Student' => [
        'table' => 'students',
        'fields' => [
            '$table->foreignId("user_id")->constrained("users")->cascadeOnDelete();',
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("major_id")->nullable()->constrained("majors")->nullOnDelete();',
            '$table->foreignId("classroom_id")->nullable()->constrained("classrooms")->nullOnDelete();',
            '$table->string("nis")->nullable();',
            '$table->string("nisn")->nullable();',
            '$table->enum("gender", ["L", "P"])->nullable();',
            '$table->string("phone")->nullable();',
            '$table->text("address")->nullable();',
            '$table->string("parent_name")->nullable();',
            '$table->string("parent_phone")->nullable();',
        ]
    ],
    'Staff' => [
        'table' => 'staff',
        'fields' => [
            '$table->foreignId("user_id")->constrained("users")->cascadeOnDelete();',
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->string("nip")->nullable();',
            '$table->string("position")->nullable();',
            '$table->string("phone")->nullable();',
            '$table->text("address")->nullable();',
        ]
    ],
    'Schedule' => [
        'table' => 'schedules',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("academic_year_id")->constrained("academic_years")->cascadeOnDelete();',
            '$table->foreignId("classroom_id")->constrained("classrooms")->cascadeOnDelete();',
            '$table->foreignId("subject_id")->constrained("subjects")->cascadeOnDelete();',
            '$table->foreignId("teacher_id")->constrained("teachers")->cascadeOnDelete();',
            '$table->integer("day_of_week"); // 1=Monday, 7=Sunday',
            '$table->time("start_time");',
            '$table->time("end_time");',
        ]
    ],
    'Attendance' => [
        'table' => 'attendances',
        'fields' => [
            '$table->foreignId("schedule_id")->constrained("schedules")->cascadeOnDelete();',
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->date("date");',
            '$table->enum("status", ["hadir", "sakit", "izin", "alpha"]);',
            '$table->text("notes")->nullable();',
        ]
    ],
    'Task' => [
        'table' => 'tasks',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("teacher_id")->constrained("teachers")->cascadeOnDelete();',
            '$table->foreignId("classroom_id")->constrained("classrooms")->cascadeOnDelete();',
            '$table->foreignId("subject_id")->constrained("subjects")->cascadeOnDelete();',
            '$table->string("title");',
            '$table->text("description");',
            '$table->enum("type", ["tugas", "latihan"]);',
            '$table->dateTime("due_date")->nullable();',
            '$table->string("file_url")->nullable();',
            '$table->string("status")->default("active");',
        ]
    ],
    'TaskSubmission' => [
        'table' => 'task_submissions',
        'fields' => [
            '$table->foreignId("task_id")->constrained("tasks")->cascadeOnDelete();',
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->string("file_url")->nullable();',
            '$table->text("text_answer")->nullable();',
            '$table->dateTime("submitted_at")->nullable();',
            '$table->integer("grade")->nullable();',
            '$table->text("feedback")->nullable();',
        ]
    ],
    'Exam' => [
        'table' => 'exams',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("teacher_id")->constrained("teachers")->cascadeOnDelete();',
            '$table->foreignId("subject_id")->constrained("subjects")->cascadeOnDelete();',
            '$table->string("title");',
            '$table->text("description")->nullable();',
            '$table->dateTime("start_time");',
            '$table->dateTime("end_time");',
            '$table->integer("duration_minutes");',
            '$table->enum("type", ["uts", "uas", "quiz", "ukk"]);',
        ]
    ],
    'ExamClassroom' => [
        'table' => 'exam_classrooms',
        'fields' => [
            '$table->foreignId("exam_id")->constrained("exams")->cascadeOnDelete();',
            '$table->foreignId("classroom_id")->constrained("classrooms")->cascadeOnDelete();',
        ]
    ],
    'Question' => [
        'table' => 'questions',
        'fields' => [
            '$table->foreignId("exam_id")->constrained("exams")->cascadeOnDelete();',
            '$table->enum("type", ["multiple_choice", "essay"]);',
            '$table->text("text");',
            '$table->string("image_url")->nullable();',
        ]
    ],
    'QuestionOption' => [
        'table' => 'question_options',
        'fields' => [
            '$table->foreignId("question_id")->constrained("questions")->cascadeOnDelete();',
            '$table->text("text");',
            '$table->string("image_url")->nullable();',
            '$table->boolean("is_correct")->default(false);',
        ]
    ],
    'ExamAttempt' => [
        'table' => 'exam_attempts',
        'fields' => [
            '$table->foreignId("exam_id")->constrained("exams")->cascadeOnDelete();',
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->dateTime("start_time");',
            '$table->dateTime("end_time")->nullable();',
            '$table->integer("score")->nullable();',
            '$table->enum("status", ["in_progress", "completed", "timeout"]);',
        ]
    ],
    'ExamAnswer' => [
        'table' => 'exam_answers',
        'fields' => [
            '$table->foreignId("exam_attempt_id")->constrained("exam_attempts")->cascadeOnDelete();',
            '$table->foreignId("question_id")->constrained("questions")->cascadeOnDelete();',
            '$table->foreignId("question_option_id")->nullable()->constrained("question_options")->nullOnDelete();',
            '$table->text("essay_answer")->nullable();',
            '$table->integer("score")->nullable();',
        ]
    ],
    'Grade' => [
        'table' => 'grades',
        'fields' => [
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->foreignId("academic_year_id")->constrained("academic_years")->cascadeOnDelete();',
            '$table->foreignId("classroom_id")->constrained("classrooms")->cascadeOnDelete();',
            '$table->foreignId("subject_id")->constrained("subjects")->cascadeOnDelete();',
            '$table->enum("type", ["tugas", "uts", "uas", "akhir", "praktek"]);',
            '$table->decimal("score", 5, 2);',
        ]
    ],
    'Payment' => [
        'table' => 'payments',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->string("title");',
            '$table->string("type"); // SPP, Gedung, Seragam',
            '$table->decimal("amount", 10, 2);',
            '$table->date("due_date");',
            '$table->dateTime("payment_date")->nullable();',
            '$table->enum("status", ["pending", "paid", "failed"]);',
            '$table->string("payment_method")->nullable();',
            '$table->string("reference_number")->nullable();',
        ]
    ],
    'MyfessPost' => [
        'table' => 'myfess_posts',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("student_id")->nullable()->constrained("students")->nullOnDelete();',
            '$table->string("title")->nullable();',
            '$table->text("content");',
            '$table->boolean("is_anonymous")->default(false);',
            '$table->enum("status", ["published", "archived", "flagged"]);',
        ]
    ],
    'MyfessComment' => [
        'table' => 'myfess_comments',
        'fields' => [
            '$table->foreignId("myfess_post_id")->constrained("myfess_posts")->cascadeOnDelete();',
            '$table->foreignId("user_id")->constrained("users")->cascadeOnDelete();',
            '$table->text("content");',
        ]
    ],
    'Counseling' => [
        'table' => 'counselings',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->foreignId("counselor_id")->constrained("teachers")->cascadeOnDelete();',
            '$table->dateTime("schedule_date");',
            '$table->enum("status", ["scheduled", "completed", "cancelled"]);',
            '$table->text("issue_description");',
            '$table->text("notes")->nullable();',
        ]
    ],
    'LibraryBook' => [
        'table' => 'library_books',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->string("title");',
            '$table->string("author")->nullable();',
            '$table->string("publisher")->nullable();',
            '$table->string("isbn")->nullable();',
            '$table->string("category")->nullable();',
            '$table->integer("stock");',
            '$table->string("cover_image")->nullable();',
        ]
    ],
    'LibraryVisit' => [
        'table' => 'library_visits',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->dateTime("visit_date");',
            '$table->string("purpose")->nullable();',
        ]
    ],
    'LibraryBorrowing' => [
        'table' => 'library_borrowings',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->foreignId("library_book_id")->constrained("library_books")->cascadeOnDelete();',
            '$table->date("borrow_date");',
            '$table->date("due_date");',
            '$table->date("return_date")->nullable();',
            '$table->enum("status", ["borrowed", "returned", "late"]);',
            '$table->integer("fine_amount")->default(0);',
        ]
    ],
    'JobVacancy' => [
        'table' => 'job_vacancies',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->string("company_name");',
            '$table->string("title");',
            '$table->text("description");',
            '$table->text("requirements");',
            '$table->string("salary_range")->nullable();',
            '$table->string("location");',
            '$table->date("deadline");',
            '$table->enum("type", ["fulltime", "internship", "parttime"]);',
            '$table->enum("status", ["open", "closed"])->default("open");',
        ]
    ],
    'JobApplication' => [
        'table' => 'job_applications',
        'fields' => [
            '$table->foreignId("job_vacancy_id")->constrained("job_vacancies")->cascadeOnDelete();',
            '$table->foreignId("user_id")->constrained("users")->cascadeOnDelete();',
            '$table->enum("status", ["applied", "interviewed", "accepted", "rejected"])->default("applied");',
            '$table->string("cv_url")->nullable();',
        ]
    ],
    'PpdbRegistration' => [
        'table' => 'ppdb_registrations',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->string("registration_number")->unique();',
            '$table->string("student_name");',
            '$table->string("nisn")->nullable();',
            '$table->string("school_origin");',
            '$table->foreignId("major_id")->constrained("majors")->cascadeOnDelete();',
            '$table->enum("status", ["pending", "test", "accepted", "rejected"])->default("pending");',
            '$table->integer("score")->nullable();',
            '$table->string("parent_name")->nullable();',
            '$table->text("address")->nullable();',
            '$table->string("phone")->nullable();',
        ]
    ],
    'Material' => [
        'table' => 'materials',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("teacher_id")->constrained("teachers")->cascadeOnDelete();',
            '$table->foreignId("classroom_id")->constrained("classrooms")->cascadeOnDelete();',
            '$table->foreignId("subject_id")->constrained("subjects")->cascadeOnDelete();',
            '$table->string("title");',
            '$table->text("content")->nullable();',
            '$table->string("file_url")->nullable();',
        ]
    ],
    'Announcement' => [
        'table' => 'announcements',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("author_id")->constrained("users")->cascadeOnDelete();',
            '$table->string("title");',
            '$table->text("content");',
            '$table->string("image_url")->nullable();',
            '$table->boolean("is_pinned")->default(false);',
        ]
    ],
    'Complaint' => [
        'table' => 'complaints',
        'fields' => [
            '$table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();',
            '$table->foreignId("student_id")->constrained("students")->cascadeOnDelete();',
            '$table->string("title");',
            '$table->text("description");',
            '$table->enum("status", ["pending", "processing", "resolved"])->default("pending");',
            '$table->text("response")->nullable();',
            '$table->foreignId("responder_id")->nullable()->constrained("users")->nullOnDelete();',
        ]
    ],
];

// --- 1. MIGRATION FILE ---
$migrationContent = "<?php\n\nuse Illuminate\Database\Migrations\Migration;\nuse Illuminate\Database\Schema\Blueprint;\nuse Illuminate\Support\Facades\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n";
$migrationContent .= "        Schema::table('users', function (Blueprint \$table) {\n";
$migrationContent .= "            \$table->foreignId('school_id')->nullable(); // references later\n";
$migrationContent .= "            \$table->string('role')->default('siswa');\n";
$migrationContent .= "            \$table->string('avatar')->nullable();\n";
$migrationContent .= "        });\n\n";

foreach ($models as $name => $data) {
    if ($data['table'] === 'users') continue;
    $migrationContent .= "        Schema::create('{$data['table']}', function (Blueprint \$table) {\n";
    $migrationContent .= "            \$table->id();\n";
    foreach ($data['fields'] as $field) {
        $migrationContent .= "            {$field}\n";
    }
    $migrationContent .= "            \$table->timestamps();\n";
    $migrationContent .= "        });\n\n";
}
$migrationContent .= "    }\n\n    public function down(): void\n    {\n";
foreach (array_reverse(array_keys($models)) as $name) {
    if ($models[$name]['table'] === 'users') continue;
    $migrationContent .= "        Schema::dropIfExists('{$models[$name]['table']}');\n";
}
$migrationContent .= "        Schema::table('users', function (Blueprint \$table) {\n";
$migrationContent .= "            \$table->dropColumn(['school_id', 'role', 'avatar']);\n";
$migrationContent .= "        });\n    }\n};\n";

file_put_contents(__DIR__ . '/database/migrations/2026_05_01_000000_create_study_app_tables.php', $migrationContent);


// --- 2. MODEL FILES ---
$modelDir = __DIR__ . '/app/Models';
if (!is_dir($modelDir)) {
    mkdir($modelDir, 0755, true);
}

foreach ($models as $name => $data) {
    if ($name === 'User') continue; // Skip built-in
    
    $modelContent = "<?php\n\nnamespace App\Models;\n\nuse Illuminate\Database\Eloquent\Factories\HasFactory;\nuse Illuminate\Database\Eloquent\Model;\n\nclass {$name} extends Model\n{\n    use HasFactory;\n\n";
    
    // Fillable
    $fillable = [];
    foreach ($data['fields'] as $field) {
        if (preg_match('/\$table->([a-zA-Z]+)\("([a-z_A-Z0-9]+)"\)/', $field, $matches)) {
            $fillable[] = "'{$matches[2]}'";
        }
    }
    $fillableStr = implode(', ', $fillable);
    $modelContent .= "    protected \$fillable = [\n        {$fillableStr}\n    ];\n\n";

    // Auto-generate belongsTo simple relations based on *_id fields
    $hasOneToMany = [];
    foreach ($fillable as $f) {
        $cleanF = str_replace("'", "", $f);
        if (str_ends_with($cleanF, '_id')) {
            $relName = str_replace('_id', '', $cleanF);
            // camelCase
            $relMethod = lcfirst(str_replace(' ', '', ucwords(str_replace('_', ' ', $relName))));
            
            // Guess model
            $targetModel = "";
            if ($cleanF == 'user_id' || $cleanF == 'author_id' || $cleanF == 'responder_id') {
                $targetModel = "User";
            } elseif ($cleanF == 'homeroom_teacher_id' || $cleanF == 'counselor_id') {
                $targetModel = "Teacher";
            } else {
                $targetModel = str_replace(' ', '', ucwords(str_replace('_', ' ', $relName)));
            }

            $modelContent .= "    public function {$relMethod}()\n    {\n        return \$this->belongsTo({$targetModel}::class, '{$cleanF}');\n    }\n\n";
        }
    }

    $modelContent .= "}\n";
    file_put_contents($modelDir . '/' . $name . '.php', $modelContent);
}

echo "Schema generation completed!\n";
