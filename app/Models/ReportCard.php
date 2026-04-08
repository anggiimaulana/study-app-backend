<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportCard extends Model
{
    use HasFactory;
    protected $fillable = ['student_id', 'academic_year_id', 'semester', 'document_url'];
}
