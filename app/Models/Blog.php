<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'link',
        'metaTitle',
        'metaDescription',
        'metaData',
        'created_at',

    ];

    use HasFactory;
}
