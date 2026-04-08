<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Major extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'code', 'name', 'description'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

}
