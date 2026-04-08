<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('user_notification_settings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->boolean('assignments')->default(true);
            $table->boolean('billing')->default(true);
            $table->boolean('news')->default(true);
            $table->boolean('jobs')->default(true);
            $table->boolean('others')->default(true);
            $table->timestamps();
        });
    }
    public function down(): void {
        Schema::dropIfExists('user_notification_settings');
    }
};