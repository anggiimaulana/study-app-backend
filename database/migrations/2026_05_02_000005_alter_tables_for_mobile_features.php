<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::table('counselings', function (Blueprint $table) {
            $table->string('reason')->nullable();
            $table->foreignId('preferred_counselor_id')->nullable()->constrained('teachers')->nullOnDelete();
            $table->enum('student_confirmation', ['pending', 'ready', 'not_ready'])->default('pending');
        });

        Schema::table('myfess_posts', function (Blueprint $table) {
            $table->json('tags')->nullable();
        });

        Schema::table('complaints', function (Blueprint $table) {
            $table->string('category')->nullable(); // akademik, fasilitas, dll
            $table->json('attachment_urls')->nullable(); // max 3
        });

        Schema::table('job_vacancies', function (Blueprint $table) {
            $table->string('job_category')->nullable();
            $table->string('field_category')->nullable();
            $table->integer('candidates_needed')->default(1);
            $table->text('company_address')->nullable();
            $table->text('responsibilities')->nullable();
            $table->foreignId('published_by_id')->nullable()->constrained('users')->nullOnDelete();
        });

        Schema::table('announcements', function (Blueprint $table) {
            $table->enum('category', ['informasi', 'pengumuman'])->default('pengumuman');
        });
    }

    public function down(): void {
        Schema::table('counselings', function (Blueprint $table) {
            $table->dropColumn(['reason', 'preferred_counselor_id', 'student_confirmation']);
        });

        Schema::table('myfess_posts', function (Blueprint $table) {
            $table->dropColumn('tags');
        });

        Schema::table('complaints', function (Blueprint $table) {
            $table->dropColumn(['category', 'attachment_urls']);
        });

        Schema::table('job_vacancies', function (Blueprint $table) {
            $table->dropColumn(['job_category', 'field_category', 'candidates_needed', 'company_address', 'responsibilities', 'published_by_id']);
        });

        Schema::table('announcements', function (Blueprint $table) {
            $table->dropColumn('category');
        });
    }
};