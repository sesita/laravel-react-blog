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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


require __DIR__.'/auth.php';


Route::get('/blogs', 'Controller@blogs')->name('Blogs');
Route::get('/blog/{slug}', 'Controller@blogDetail')->name('Blog');

Route::group(['prefix' => 'admin', 'middleware' => ['auth', 'verified']], function() {
    Route::get('/profile', 'ProfileController@edit')->name('profile.edit');
    Route::patch('/profile', 'ProfileController@update')->name('profile.update');
    Route::delete('/profile', 'ProfileController@destroy')->name('profile.destroy');

    Route::get('/', 'AdminController@index')->name('Dashboard');
    Route::post('/blog/store', 'AdminController@store')->name('Blog.Store');
    Route::put('/blog/edit/{blogId}', 'AdminController@update')->name('Blog.Update');
    Route::delete('/blog/delete/{blogId}', 'AdminController@delete')->name('Blog.Delete');
});