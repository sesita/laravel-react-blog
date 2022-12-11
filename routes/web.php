<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/auth.php';

Route::get('/', 'Controller@blogs')->name('Blogs');
Route::get('/about', 'Controller@about')->name('About');

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'verified']], function() {
    Route::get('/', 'AdminController@index')->name('Dashboard');

    Route::get('/blog/create', 'BlogController@create')->name('blog.create');
    Route::post('/blog/store', 'BlogController@store')->name('blog.store');
    Route::get('/blog/edit/{id}', 'BlogController@edit')->name('blog.edit');
    Route::post('/blog/update/{id}', 'BlogController@update')->name('blog.update');
    Route::get('/blog/delete/{id}', 'BlogController@destroy')->name('blog.destroy');

    Route::get('/about/edit', 'AdminController@aboutEdit')->name('About.Edit');
    Route::post('/about/update', 'AdminController@aboutUpdate')->name('About.Update');

    Route::get('/profile', 'ProfileController@edit')->name('profile.edit');
    Route::patch('/profile', 'ProfileController@update')->name('profile.update');
    Route::delete('/profile', 'ProfileController@destroy')->name('profile.destroy');
});

Route::get('/{slug}', 'Controller@blogDetail')->name('Blog.Detail');