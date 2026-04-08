<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LibraryBook extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'title', 'author', 'publisher', 'isbn', 'category', 'stock', 'cover_image'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

}
