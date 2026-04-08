<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('task_submissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId("task_id")->constrained("tasks")->cascadeOnDelete();
            $table->foreignId("student_id")->constrained("students")->cascadeOnDelete();
            $table->string("file_url")->nullable();
            $table->text("text_answer")->nullable();
            $table->dateTime("submitted_at")->nullable();
            $table->integer("grade")->nullable();
            $table->text("feedback")->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('task_submissions');
    }
};
