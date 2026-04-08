<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->foreignId("user_id")->constrained("users")->cascadeOnDelete();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->foreignId("major_id")->nullable()->constrained("majors")->nullOnDelete();
            $table->foreignId("classroom_id")->nullable()->constrained("classrooms")->nullOnDelete();
            $table->string("nis")->nullable();
            $table->string("nisn")->nullable();
            $table->enum("gender", ["L", "P"])->nullable();
            $table->string("phone")->nullable();
            $table->text("address")->nullable();
            $table->string("parent_name")->nullable();
            $table->string("parent_phone")->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
