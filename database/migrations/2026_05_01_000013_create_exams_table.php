<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('exams', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->foreignId("teacher_id")->constrained("teachers")->cascadeOnDelete();
            $table->foreignId("subject_id")->constrained("subjects")->cascadeOnDelete();
            $table->string("title");
            $table->text("description")->nullable();
            $table->dateTime("start_time");
            $table->dateTime("end_time");
            $table->integer("duration_minutes");
            $table->enum("type", ["uts", "uas", "quiz", "ukk"]);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('exams');
    }
};
