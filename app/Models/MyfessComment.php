<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MyfessComment extends Model
{
    use HasFactory;

    protected $fillable = [
        'myfess_post_id', 'user_id', 'content'
    ];

    public function myfessPost()
    {
        return $this->belongsTo(MyfessPost::class, 'myfess_post_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
