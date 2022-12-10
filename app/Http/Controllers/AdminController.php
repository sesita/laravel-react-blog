<?php

namespace App\Http\Controllers;

use DB;
use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        $blogs = Blog::latest()->get();
        return Inertia::render('Dashboard', ['blogs' => $blogs]);
    }
    public function aboutEdit()
    {
        $about = DB::table('about')->first();
        return Inertia::render('EditAbout', ['about' => $about]);
    }
    public function aboutUpdate(Request $request)
    {
        $about = DB::table('about')->where('id', 1)->update([
            'description' => $request->description
        ]);
    }
}
