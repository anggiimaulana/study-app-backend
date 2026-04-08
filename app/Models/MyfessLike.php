<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyfessLike extends Model
{
    use HasFactory;
    protected $fillable = ['myfess_post_id', 'user_id'];
}
