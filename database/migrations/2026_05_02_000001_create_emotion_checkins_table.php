<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('emotion_checkins', function (Blueprint $table) {
            $table->id();
            $table->foreignId('school_id')->constrained('schools')->cascadeOnDelete();
            $table->foreignId('student_id')->constrained('students')->cascadeOnDelete();
            $table->string('mood'); // happy, sad, angry, etc
            $table->string('current_condition')->nullable();
            $table->string('experienced_event')->nullable();
            $table->text('story')->nullable();
            $table->text('ai_analysis_result')->nullable(); // For emotion classification
            $table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('emotion_checkins');
    }
};