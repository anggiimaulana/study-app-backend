<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->foreignId("student_id")->constrained("students")->cascadeOnDelete();
            $table->foreignId("academic_year_id")->constrained("academic_years")->cascadeOnDelete();
            $table->foreignId("classroom_id")->constrained("classrooms")->cascadeOnDelete();
            $table->foreignId("subject_id")->constrained("subjects")->cascadeOnDelete();
            $table->enum("type", ["tugas", "uts", "uas", "akhir", "praktek"]);
            $table->decimal("score", 5, 2);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('grades');
    }
};
