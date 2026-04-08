<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->foreignId("teacher_id")->constrained("teachers")->cascadeOnDelete();
            $table->foreignId("classroom_id")->constrained("classrooms")->cascadeOnDelete();
            $table->foreignId("subject_id")->constrained("subjects")->cascadeOnDelete();
            $table->string("title");
            $table->text("description");
            $table->enum("type", ["tugas", "latihan"]);
            $table->dateTime("due_date")->nullable();
            $table->string("file_url")->nullable();
            $table->string("status")->default("active");
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
