<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ppdb_registrations', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->string("registration_number")->unique();
            $table->string("student_name");
            $table->string("nisn")->nullable();
            $table->string("school_origin");
            $table->foreignId("major_id")->constrained("majors")->cascadeOnDelete();
            $table->enum("status", ["pending", "test", "accepted", "rejected"])->default("pending");
            $table->integer("score")->nullable();
            $table->string("parent_name")->nullable();
            $table->text("address")->nullable();
            $table->string("phone")->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ppdb_registrations');
    }
};
