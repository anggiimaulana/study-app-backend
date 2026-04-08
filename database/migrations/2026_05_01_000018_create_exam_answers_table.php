<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('exam_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId("exam_attempt_id")->constrained("exam_attempts")->cascadeOnDelete();
            $table->foreignId("question_id")->constrained("questions")->cascadeOnDelete();
            $table->foreignId("question_option_id")->nullable()->constrained("question_options")->nullOnDelete();
            $table->text("essay_answer")->nullable();
            $table->integer("score")->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exam_answers');
    }
};
