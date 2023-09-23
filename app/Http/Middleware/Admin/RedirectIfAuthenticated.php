<?php

namespace App\Http\Middleware\Admin;

use Auth;
use Closure;

class RedirectIfAuthenticated
{

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param  string|null $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        // dd('nhan');
        if (Auth::guard($guard)->check()) {
            return redirect(route('dashboard.index'));
        }
        return $next($request);
    }
}
