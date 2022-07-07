<?php

namespace App\Http\Controllers;


use App\Repositories\BookRepository;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    private BookRepository $_bookRepository;
    public function __construct(BookRepository $bookRepository)
    {
        $this->_bookRepository = $bookRepository;
    }
    
    public function getDiscountBook()
    {

        return response($this->_bookRepository->getDiscountBook()->limit(10)->get());
        
    }
    public function getRecommendedBook()
    {
        return response($this->_bookRepository->getRecommendedBook()->limit(8)->get());
    }
    public function getPopularBook()
    {
        return response($this->_bookRepository->getPopularBook()->orderBy('final_price')->limit(8)->get());
    }
    

       
}
