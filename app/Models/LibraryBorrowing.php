<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LibraryBorrowing extends Model
{
    use HasFactory;

    protected $fillable = [
        'school_id', 'student_id', 'library_book_id', 'borrow_date', 'due_date', 'return_date', 'fine_amount'
    ];

    public function school()
    {
        return $this->belongsTo(School::class, 'school_id');
    }

    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }

    public function libraryBook()
    {
        return $this->belongsTo(LibraryBook::class, 'library_book_id');
    }

}
