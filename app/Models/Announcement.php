<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Announcement extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'author_id', 'title', 'content', 'image_url', 'is_pinned'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

}
