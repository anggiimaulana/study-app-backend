<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AcademicYear extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'name', 'is_active'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

}
