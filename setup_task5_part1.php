<?php

$dir = __DIR__ . '/database/migrations';
$files = glob($dir . '/*_create_teacher_evaluations_table.php');

if (!empty($files)) {
    $file = $files[0];
    $migrationContent = "<?php\n\nuse Illuminate\Database\Migrations\Migration;\nuse Illuminate\Database\Schema\Blueprint;\nuse Illuminate\Support\Facades\Schema;\n\nreturn new class extends Migration\n{\n    public function up(): void\n    {\n        Schema::create('teacher_evaluations', function (Blueprint \$table) {\n            \$table->id();\n            \$table->foreignId('school_id')->constrained('schools')->cascadeOnDelete();\n            \$table->foreignId('teacher_id')->constrained('teachers')->cascadeOnDelete();\n            \$table->foreignId('student_id')->constrained('students')->cascadeOnDelete();\n            \$table->integer('rating'); // 1-5\n            \$table->text('notes')->nullable();\n            \$table->timestamps();\n        });\n    }\n\n    public function down(): void\n    {\n        Schema::dropIfExists('teacher_evaluations');\n    }\n};\n";
    file_put_contents($file, $migrationContent);
}

$modelPath = __DIR__ . '/app/Models/TeacherEvaluation.php';
$modelContent = "<?php\n\nnamespace App\Models;\n\nuse Illuminate\Database\Eloquent\Factories\HasFactory;\nuse Illuminate\Database\Eloquent\Model;\n\nclass TeacherEvaluation extends Model\n{\n    use HasFactory;\n    protected \$fillable = ['school_id', 'teacher_id', 'student_id', 'rating', 'notes'];\n\n    public function teacher() { return \$this->belongsTo(Teacher::class); }\n    public function student() { return \$this->belongsTo(Student::class); }\n    public function school() { return \$this->belongsTo(School::class); }\n}\n";
file_put_contents($modelPath, $modelContent);

// Also add average rating relationship to Teacher
$teacherModelPath = __DIR__ . '/app/Models/Teacher.php';
$teacherContent = file_get_contents($teacherModelPath);
if (!str_contains($teacherContent, 'evaluations()')) {
    $teacherContent = str_replace(
        "}",
        "    public function evaluations()\n    {\n        return \$this->hasMany(TeacherEvaluation::class);\n    }\n\n    public function averageRating()\n    {\n        return \$this->evaluations()->avg('rating') ?? 0;\n    }\n}",
        $teacherContent
    );
    file_put_contents($teacherModelPath, $teacherContent);
}

// Generate Role Middleware
$middlewareDir = __DIR__ . '/app/Http/Middleware';
if (!is_dir($middlewareDir)) mkdir($middlewareDir, 0755, true);

$middlewareContent = "<?php\n\nnamespace App\Http\Middleware;\n\nuse Closure;\nuse Illuminate\Http\Request;\nuse Illuminate\Support\Facades\Auth;\nuse Symfony\Component\HttpFoundation\Response;\n\nclass RoleMiddleware\n{\n    public function handle(Request \$request, Closure \$next, ...\$roles): Response\n    {\n        if (!Auth::check()) {\n            return redirect('/login')->with('error', 'Silakan login terlebih dahulu.');\n        }\n\n        \$user = Auth::user();\n        \n        if (!in_array(\$user->role, \$roles)) {\n            // Prevent URL Injection / IDOR\n            abort(403, 'Anda tidak memiliki hak akses ke halaman ini.');\n        }\n\n        return \$next(\$request);\n    }\n}\n";
file_put_contents($middlewareDir . '/RoleMiddleware.php', $middlewareContent);

echo "Task 5 setup part 1 completed: schema and middleware updated.";
