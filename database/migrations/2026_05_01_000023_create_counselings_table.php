<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('counselings', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->foreignId("student_id")->constrained("students")->cascadeOnDelete();
            $table->foreignId("counselor_id")->nullable()->constrained("teachers")->nullOnDelete();
            $table->dateTime("schedule_date");
            $table->enum("status", ["scheduled", "completed", "cancelled"]);
            $table->text("issue_description");
            $table->text("notes")->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('counselings');
    }
};
