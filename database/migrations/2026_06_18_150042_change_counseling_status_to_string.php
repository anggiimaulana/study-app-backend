<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('counselings', function (Blueprint $table) {
            $table->string('status')->default('pending')->change();
            $table->string('urgency_level')->default('biasa')->change();
            $table->string('target_role')->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('counselings', function (Blueprint $table) {
            $table->enum('status', ['scheduled', 'completed', 'cancelled'])->default('scheduled')->change();
            $table->enum('urgency_level', ['biasa', 'penting', 'mendesak'])->default('biasa')->change();
            $table->enum('target_role', ['guru', 'bk'])->nullable()->change();
        });
    }
};
