<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('counselings', function (Blueprint $table) {
            $table->enum('target_role', ['wali_kelas', 'bk'])->nullable()->after('student_id');
            $table->enum('urgency_level', ['rendah', 'sedang', 'mendesak', 'urgen'])->nullable()->after('issue_description');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('counselings', function (Blueprint $table) {
            $table->dropColumn(['target_role', 'urgency_level']);
        });
    }
};
