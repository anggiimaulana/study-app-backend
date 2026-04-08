<?php

$dir = __DIR__ . '/database/migrations';

$migrations = [
    '2026_05_02_000001_create_emotion_checkins_table.php' => "<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('emotion_checkins', function (Blueprint \$table) {
            \$table->id();
            \$table->foreignId('school_id')->constrained('schools')->cascadeOnDelete();
            \$table->foreignId('student_id')->constrained('students')->cascadeOnDelete();
            \$table->string('mood'); // happy, sad, angry, etc
            \$table->string('current_condition')->nullable();
            \$table->string('experienced_event')->nullable();
            \$table->text('story')->nullable();
            \$table->text('ai_analysis_result')->nullable(); // For emotion classification
            \$table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('emotion_checkins');
    }
};",

    '2026_05_02_000002_create_myfess_likes_table.php' => "<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('myfess_likes', function (Blueprint \$table) {
            \$table->id();
            \$table->foreignId('myfess_post_id')->constrained('myfess_posts')->cascadeOnDelete();
            \$table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            \$table->timestamps();
            
            \$table->unique(['myfess_post_id', 'user_id']);
        });
    }
    public function down(): void {
        Schema::dropIfExists('myfess_likes');
    }
};",

    '2026_05_02_000003_create_user_notification_settings_table.php' => "<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('user_notification_settings', function (Blueprint \$table) {
            \$table->id();
            \$table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            \$table->boolean('assignments')->default(true);
            \$table->boolean('billing')->default(true);
            \$table->boolean('news')->default(true);
            \$table->boolean('jobs')->default(true);
            \$table->boolean('others')->default(true);
            \$table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('user_notification_settings');
    }
};",

    '2026_05_02_000004_create_report_cards_table.php' => "<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('report_cards', function (Blueprint \$table) {
            \$table->id();
            \$table->foreignId('student_id')->constrained('students')->cascadeOnDelete();
            \$table->foreignId('academic_year_id')->constrained('academic_years')->cascadeOnDelete();
            \$table->string('semester'); // ganjil, genap
            \$table->string('document_url')->nullable();
            \$table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('report_cards');
    }
};",

    '2026_05_02_000005_alter_tables_for_mobile_features.php' => "<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('counselings', function (Blueprint \$table) {
            \$table->string('reason')->nullable();
            \$table->foreignId('preferred_counselor_id')->nullable()->constrained('teachers')->nullOnDelete();
            \$table->enum('student_confirmation', ['pending', 'ready', 'not_ready'])->default('pending');
        });

        Schema::table('myfess_posts', function (Blueprint \$table) {
            \$table->json('tags')->nullable();
        });

        Schema::table('complaints', function (Blueprint \$table) {
            \$table->string('category')->nullable(); // akademik, fasilitas, dll
            \$table->json('attachment_urls')->nullable(); // max 3
        });

        Schema::table('job_vacancies', function (Blueprint \$table) {
            \$table->string('job_category')->nullable();
            \$table->string('field_category')->nullable();
            \$table->integer('candidates_needed')->default(1);
            \$table->text('company_address')->nullable();
            \$table->text('responsibilities')->nullable();
            \$table->foreignId('published_by_id')->nullable()->constrained('users')->nullOnDelete();
        });

        Schema::table('announcements', function (Blueprint \$table) {
            \$table->enum('category', ['informasi', 'pengumuman'])->default('pengumuman');
        });
    }

    public function down(): void {
        Schema::table('counselings', function (Blueprint \$table) {
            \$table->dropColumn(['reason', 'preferred_counselor_id', 'student_confirmation']);
        });

        Schema::table('myfess_posts', function (Blueprint \$table) {
            \$table->dropColumn('tags');
        });

        Schema::table('complaints', function (Blueprint \$table) {
            \$table->dropColumn(['category', 'attachment_urls']);
        });

        Schema::table('job_vacancies', function (Blueprint \$table) {
            \$table->dropColumn(['job_category', 'field_category', 'candidates_needed', 'company_address', 'responsibilities', 'published_by_id']);
        });

        Schema::table('announcements', function (Blueprint \$table) {
            \$table->dropColumn('category');
        });
    }
};"
];

foreach ($migrations as $filename => $content) {
    file_put_contents($dir . '/' . $filename, $content);
}

echo "Missing migrations generated!";
