<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id', 'school_id', 'nip', 'nuptk', 'phone', 'address', 'gender', 'positions'
    ];

    protected $casts = [
        'positions' => 'array',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }
    
    public function evaluations()
    {
        return $this->hasMany(TeacherEvaluation::class);
    }

    public function averageRating()
    {
        return $this->evaluations()->avg('rating') ?? 0;
    }
}
