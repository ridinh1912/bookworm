<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Reponse;
use App\Repositories\UserRepository;

class AuthController extends Controller
{
   
    private UserRepository $_userRepository; 
    public function __construct(UserRepository $userRepository)
    {
        $this->_userRepository = $userRepository;
    }
    public function register(Request $request){
        return $this->_userRepository->register($request);
    }
    public function login(Request $request){
        return $this->_userRepository->login($request);
    }
    public function getUserByToken(Request $request){
        return $this->_userRepository->getUserByToken($request);
    }
    public function logout(Request $request){
        return $this->_userRepository->logout($request);
    }
}
