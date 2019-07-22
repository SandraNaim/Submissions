<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\User;

/**
 * @group User management
 *
 * APIs for managing users
 */
class UsersApiController extends Controller
{
    
    public function __construct() {
        $this->middleware('jwt.auth');
    }
    
    /**
     * Fetch the list of all users
     *
     * This api route return all the users in the database.
     *
     */
    public function index()
    {
        $users = User::all();

        return $users;
    }
    
    /**
     * Store a new user inside the database
     *
     * @bodyParam first_name string required The first name of the registered user.
     * @bodyParam last_name string required The last name of the registered user.
     * @bodyParam middle_name string required The middle name of the registered user.
     * @bodyParam email string required The email of the registered user.
     * @bodyParam password string required The password of the registered user.
     * @bodyParam roles array required The set of roles of the registered user, it accepts 1 to many roles.
     * @bodyParam roles.* integer required The role id of the registered user.
     *
     */
    public function store(StoreUserRequest $request)
    {
        return User::create($request->all());
    }
    
    /**
     * Update an existing user inside the database
     *
     * @bodyParam first_name string required The first name of the registered user.
     * @bodyParam last_name string required The last name of the registered user.
     * @bodyParam middle_name string required The middle name of the registered user.
     * @bodyParam email string required The email of the registered user.
     * @bodyParam password string required The password of the registered user.
     * @bodyParam roles array required The set of roles of the registered user, it accepts 1 to many roles.
     * @bodyParam roles.* integer required The role id of the registered user.
     *
     */
    public function update(UpdateUserRequest $request, User $user)
    {
        return $user->update($request->all());
    }
    
    
    /**
     * List the details of 1 user by user id <br/>
     *  /api/v1/users/{user} where user is an integer
     */
    public function show(User $user)
    {
        return $user;
    }
    
    /**
     * Completely delete user by providing 1 user id per time
     *  /api/v1/users/{user} where user is an integer
     */
    public function destroy(User $user)
    {
        return $user->delete();
    }
}
