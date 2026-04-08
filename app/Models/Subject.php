<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'major_id', 'code', 'name', 'description'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

    public function major()
    {
        return $this->belongsTo(Major::class, 'major_id');
    }

}
