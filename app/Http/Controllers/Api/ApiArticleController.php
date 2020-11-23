<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ApiArticleController extends Controller
{
    public function index(Request $request)
    {
        $articles = Article::with('menu', 'auth')->whereRaw(1);
        if ($menuID = $request->menuID)
            $articles->where('a_menu_id', $menuID);

        return $articles = $articles->paginate(10);
    }

    public function show($id)
    {
        $articleNext = Article::where('id', '>', $id)->orderBy('id','asc')->first();
        $article     = Article::with('menu', 'auth')->find($id);
        $articlePrev = Article::where('id', '<', $id)->orderBy('id','desc')->first();
        $data        = [
            'articleNext' => $articleNext,
            'articlePrev' => $articlePrev,
            'article'     => $article
        ];

        return $data;
    }

    public function getArticleHot()
    {
        $articles = Article::with('menu', 'auth')
            ->where('a_position', 1)
            ->orderByDesc('id')
            ->limit(4)
            ->get();

        return $articles;
    }

    public function getArticleByMenu($menuID)
    {
        return Article::with('menu')
            ->where('m_menu_id', $menuID)
            ->paginate(20);
    }
}
