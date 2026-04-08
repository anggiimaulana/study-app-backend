<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'npsn', 'address', 'phone', 'email', 'website', 'logo', 'status', 'subscription_plan', 'subscription_end_date'
    ];

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function students()
    {
        return $this->hasMany(Student::class);
    }
    
    public function teachers()
    {
        return $this->hasMany(Teacher::class);
    }
    
    public function classrooms()
    {
        return $this->hasMany(Classroom::class);
    }
    
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
    
    public function complaints()
    {
        return $this->hasMany(Complaint::class);
    }
}
