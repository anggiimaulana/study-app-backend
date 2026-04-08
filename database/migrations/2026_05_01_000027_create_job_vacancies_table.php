<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('job_vacancies', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->string("company_name");
            $table->string("title");
            $table->text("description");
            $table->text("requirements");
            $table->string("salary_range")->nullable();
            $table->string("location");
            $table->date("deadline");
            $table->enum("type", ["fulltime", "internship", "parttime"]);
            $table->enum("status", ["open", "closed"])->default("open");
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('job_vacancies');
    }
};
