<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->foreignId("student_id")->constrained("students")->cascadeOnDelete();
            $table->enum("target_role", ["admin", "specific_teacher", "all_teachers", "school"]);
            $table->foreignId("target_user_id")->nullable()->constrained("users")->nullOnDelete();
            $table->string("title");
            $table->text("description");
            $table->enum("status", ["pending", "processing", "resolved"])->default("pending");
            $table->text("response")->nullable();
            $table->foreignId("responder_id")->nullable()->constrained("users")->nullOnDelete();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('complaints');
    }
};
