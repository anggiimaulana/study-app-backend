<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('classrooms', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->foreignId("major_id")->constrained("majors")->cascadeOnDelete();
            $table->foreignId("academic_year_id")->constrained("academic_years")->cascadeOnDelete();
            $table->foreignId("homeroom_teacher_id")->nullable()->constrained("teachers")->nullOnDelete();
            $table->integer("level");
            $table->string("name");
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('classrooms');
    }
};
