<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobApplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'job_vacancy_id', 'user_id', 'cv_url'
    ];

    public function jobVacancy()
    {
        return $this->belongsTo(JobVacancy::class, 'job_vacancy_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

}
