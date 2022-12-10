<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class BlogController extends Controller
{
    public function index()
    {
        $blogs = Blog::latest()->get();
        return Inertia::render('Dashboard', ['blogs' => $blogs]);
    }
    public function create()
    {
        return Inertia::render('AddBlog');
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'slug' => 'required|unique:blogs,slug',
        ]);
        // Blog Store
        Blog::create([
            'title' => $request->title,
            'slug' => $request->slug,
            'description' => $request->description,
        ]);

        return Redirect::route('Dashboard');
    }
    public function update($blogId, Request $request)
    {
        $blog = Blog::find($blogId);
        if (!$blog) {
            return response(['error' => true, 'message' => 'Blog Not Found']);
        }

        $this->validate($request, [
            'slug' => 'required|unique:blogs,slug,' . $blogId,
        ]);

        $blog->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'description' => $request->description,
            'link' => $request->link,
        ]);

        return response(['success' => true, 'message' => 'Blog Successfuly Edited']);
    }
    public function destroy($blogId, Request $request)
    {
        Blog::where('id', $blogId)->delete();

        return Redirect::route('Dashboard');
    }
}
