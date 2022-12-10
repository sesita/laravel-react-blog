<?php

namespace App\Http\Controllers;

use DB;
use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function blogs(){
        $blogs = Blog::latest()->get();
        return Inertia::render('Welcome', ['blogs' => $blogs]);
    }
    public function blogDetail($slug){
        $blog = Blog::where('slug', $slug)->first();
        if(!$blog){
            return response(['error' => true, 'message' => 'Blog Not Found']);
        }
        return Inertia::render('DetailBlog', ['blog' => $blog]);
    }
    public function about(){
        $about = DB::table('about')->first();
        return Inertia::render('About', ['about' => $about]);
    }
}
