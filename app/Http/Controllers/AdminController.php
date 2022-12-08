<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function index()
    {
        $blogs = Blog::latest()->get();
        return Inertia::render('Dashboard', ['blogs' => $blogs]);
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
            'link' => $request->link,
        ]);

        return response(['success' => true, 'message' => 'Blog Successfuly Added']);
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
    public function delete($blogId, Request $request)
    {
        Blog::where('id', $blogId)->delete();

        return response(['success' => true, 'message' => 'Blog Successfuly Deleted']);
    }
}
