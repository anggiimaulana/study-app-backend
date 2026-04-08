<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobVacancy extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'company_name', 'title', 'description', 'requirements', 'salary_range', 'location', 'deadline'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

}
