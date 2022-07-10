<?php

namespace App\Repositories;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;



class UserRepository extends BaseRepository
{
    public function register(Request $request){
        $field=$request->validate(
            [
                'last_name'=>'required|string',
                'first_name'=>'required|string',
                'email'=>'required|string|unique:user',
                'password'=>'required|string'
            ]
        );
        $user=User::create([
            'first_name'=>$field['first_name'],
            'last_name'=>$field['last_name'],
            'email'=>$field['email'],
            'password'=>bcrypt($field['password']),
        ]);
        
        
        $token=$user->createToken('myapptoken')->plainTextToken;
        $response = [
            'user'=> $user,
            'token'=>$token
        ];
        return response($response,201);
    }
    public function login(Request $request){
        $field=$request->validate(
            [
                'email'=>'required|string',
                'password'=>'required|string'
            ]
        );
        $user=User::where('email',$field['email'])->first();
        
        if(!$user || !Hash::check($field['password'],$user->password)){
            return response([
                'message'=>'Bad creds'
            ],401);
        }
        $token=$user->createToken('myapptoken')->plainTextToken;
        $response = [
            'user'=> $user,
            'token'=>$token
        ];
        return response($response,201);
    }
    public function logout(Request $request){
        auth()->user()->tokens()->delete();
        return ['message' => 'logged out'];
    }
}
