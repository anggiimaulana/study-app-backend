<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('exam_attempts', function (Blueprint $table) {
            $table->id();
            $table->foreignId("exam_id")->constrained("exams")->cascadeOnDelete();
            $table->foreignId("student_id")->constrained("students")->cascadeOnDelete();
            $table->dateTime("start_time");
            $table->dateTime("end_time")->nullable();
            $table->integer("score")->nullable();
            $table->enum("status", ["in_progress", "completed", "timeout"]);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exam_attempts');
    }
};
