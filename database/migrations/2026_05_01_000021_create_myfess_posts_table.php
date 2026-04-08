<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('myfess_posts', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->foreignId("student_id")->nullable()->constrained("students")->nullOnDelete();
            $table->string("title")->nullable();
            $table->text("content");
            $table->boolean("is_anonymous")->default(false);
            $table->enum("status", ["published", "archived", "flagged"]);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('myfess_posts');
    }
};
