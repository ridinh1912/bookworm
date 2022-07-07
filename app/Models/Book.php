<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'book';
    public function reviews()
    {
        return $this->morphMany(Review::class, 'reviewtable')->whereNull('book_id');
    }
}
