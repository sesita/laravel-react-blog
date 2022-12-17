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
            'title' => 'required',
            'slug' => 'required|unique:blogs,slug',
        ]);
        // Blog Store
        Blog::create([
            'title' => $request->title,
            'slug' => $request->slug,
            'description' => $request->description,
            'metaTitle' => $request->metaTitle,
            'metaDescription' => $request->metaDescription,
            'metaData' => $request->metaData,
            'created_at' => $request->created_at,
        ]);

        return Redirect::route('Dashboard');
    }
    public function edit($id)
    {
        $blog = Blog::where('id', $id)->first();
        return Inertia::render('EditBlog', ['blog' => $blog]);
    }
    public function update($blogId, Request $request)
    {
        $blog = Blog::find($blogId);

        $this->validate($request, [
            'title' => 'required',
            'slug' => 'required|unique:blogs,slug,' . $blogId,
        ]);

        $blog->update([
            'title' => $request->title,
            'slug' => $request->slug,
            'description' => $request->description,
            'metaTitle' => $request->metaTitle,
            'metaDescription' => $request->metaDescription,
            'metaData' => $request->metaData,
            'created_at' => $request->created_at,
        ]);

        return Redirect::route('Dashboard');
    }
    public function destroy($blogId, Request $request)
    {
        Blog::where('id', $blogId)->delete();

        return Redirect::route('Dashboard');
    }
}
