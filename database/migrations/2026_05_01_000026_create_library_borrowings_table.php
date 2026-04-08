<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('library_borrowings', function (Blueprint $table) {
            $table->id();
            $table->foreignId("school_id")->constrained("schools")->cascadeOnDelete();
            $table->foreignId("student_id")->constrained("students")->cascadeOnDelete();
            $table->foreignId("library_book_id")->constrained("library_books")->cascadeOnDelete();
            $table->date("borrow_date");
            $table->date("due_date");
            $table->date("return_date")->nullable();
            $table->enum("status", ["borrowed", "returned", "late"]);
            $table->integer("fine_amount")->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('library_borrowings');
    }
};
