<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('myfess_likes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('myfess_post_id')->constrained('myfess_posts')->cascadeOnDelete();
            $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
            $table->timestamps();
            
            $table->unique(['myfess_post_id', 'user_id']);
        });
    }
    public function down(): void {
        Schema::dropIfExists('myfess_likes');
    }
};