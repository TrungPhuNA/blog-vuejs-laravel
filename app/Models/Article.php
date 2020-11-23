<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;

    public function menu()
    {
        return $this->belongsTo(Menu::class, 'a_menu_id');
    }

    public function auth()
    {
        return $this->belongsTo(User::class, 'a_user_id');
    }
}
