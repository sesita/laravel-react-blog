<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function blogs(){
        $blogs = Blog::latest()->get();
        return response($blogs);
    }
    public function blogDetail($slug){
        $blog = Blog::where('slug', $slug)->first();
        if(!$blog){
            return response(['error' => true, 'message' => 'Blog Not Found']);
        }
        return response($blog);
    }
}
