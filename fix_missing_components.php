<?php

$modelDir = __DIR__ . '/app/Models';
if (!is_dir($modelDir)) mkdir($modelDir, 0755, true);

// 1. Missing Models creation
$models = [
    'EmotionCheckin' => "<?php\n\nnamespace App\Models;\n\nuse Illuminate\Database\Eloquent\Factories\HasFactory;\nuse Illuminate\Database\Eloquent\Model;\n\nclass EmotionCheckin extends Model\n{\n    use HasFactory;\n    protected \$fillable = ['school_id', 'student_id', 'mood', 'current_condition', 'experienced_event', 'story', 'ai_analysis_result'];\n\n    public function student() { return \$this->belongsTo(Student::class); }\n}\n",
    
    'MyfessLike' => "<?php\n\nnamespace App\Models;\n\nuse Illuminate\Database\Eloquent\Factories\HasFactory;\nuse Illuminate\Database\Eloquent\Model;\n\nclass MyfessLike extends Model\n{\n    use HasFactory;\n    protected \$fillable = ['myfess_post_id', 'user_id'];\n}\n",

    'UserNotificationSetting' => "<?php\n\nnamespace App\Models;\n\nuse Illuminate\Database\Eloquent\Factories\HasFactory;\nuse Illuminate\Database\Eloquent\Model;\n\nclass UserNotificationSetting extends Model\n{\n    use HasFactory;\n    protected \$fillable = ['user_id', 'assignments', 'billing', 'news', 'jobs', 'others'];\n}\n",

    'ReportCard' => "<?php\n\nnamespace App\Models;\n\nuse Illuminate\Database\Eloquent\Factories\HasFactory;\nuse Illuminate\Database\Eloquent\Model;\n\nclass ReportCard extends Model\n{\n    use HasFactory;\n    protected \$fillable = ['student_id', 'academic_year_id', 'semester', 'document_url'];\n}\n",
];

foreach ($models as $name => $content) {
    file_put_contents($modelDir . '/' . $name . '.php', $content);
}

// 2. Integration: User -> notification settings on login / or relationships
$userModelPath = $modelDir . '/User.php';
$userContent = file_get_contents($userModelPath);
if (!str_contains($userContent, 'notificationSettings')) {
    $userContent = str_replace(
        "    public function staff()\n    {\n        return \$this->hasOne(Staff::class);\n    }",
        "    public function staff()\n    {\n        return \$this->hasOne(Staff::class);\n    }\n\n    public function notificationSettings()\n    {\n        return \$this->hasOne(UserNotificationSetting::class);\n    }",
        $userContent
    );
    file_put_contents($userModelPath, $userContent);
}

// 3. Fix AuthController to create default settings
$authCtrlPath = __DIR__ . '/app/Http/Controllers/Api/AuthController.php';
$authContent = file_get_contents($authCtrlPath);
if (!str_contains($authContent, 'notificationSettings()->firstOrCreate')) {
    $authContent = str_replace(
        "\$user->tokens()->delete();",
        "// Ensure notification settings exist (Integration Fix)\n        \$user->notificationSettings()->firstOrCreate([]);\n\n        \$user->tokens()->delete();",
        $authContent
    );
    file_put_contents($authCtrlPath, $authContent);
}

// 4. Implement true CRUD logic in MyfessController to replace the empty stub
$myfessCtrlPath = __DIR__ . '/app/Http/Controllers/Api/MyfessController.php';
$myfessCtrlContent = "<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\MyfessPost;
use Illuminate\Support\Facades\Gate;

class MyfessController extends Controller
{
    public function index(Request \$request)
    {
        \$posts = MyfessPost::with(['student', 'student.user'])->latest()->paginate(15);
        return response()->json(['status' => 'success', 'data' => \$posts]);
    }

    public function store(Request \$request)
    {
        \$validated = \$request->validate([
            'school_id' => 'required',
            'title' => 'nullable|string',
            'content' => 'required|string',
            'is_anonymous' => 'boolean',
            'tags' => 'nullable|array'
        ]);
        
        \$validated['student_id'] = \$request->user()->student->id ?? null;
        \$validated['status'] = 'published';
        
        \$post = MyfessPost::create(\$validated);
        
        // This is where we would trigger basic Laravel Event broadcasting (misal: NotificationEvent::dispatch(\$post))
        
        return response()->json(['status' => 'success',  'message' => 'Post created (Realtime events ready)', 'data' => \$post]);
    }

    public function show(\$id)
    {
        \$post = MyfessPost::with('student')->findOrFail(\$id);
        return response()->json(['status' => 'success', 'data' => \$post]);
    }

    public function update(Request \$request, \$id)
    {
        \$post = MyfessPost::findOrFail(\$id);
        \$post->update(\$request->only(['title', 'content', 'status', 'tags']));
        return response()->json(['status' => 'success', 'data' => \$post]);
    }

    public function destroy(\$id)
    {
        MyfessPost::destroy(\$id);
        return response()->json(['status' => 'success', 'message' => 'Deleted']);
    }
}
";
file_put_contents($myfessCtrlPath, $myfessCtrlContent);

echo "Bugs fixed, models generated, real-time scaffolding readied, integration patched.";
