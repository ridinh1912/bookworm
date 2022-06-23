<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

use App\Repositories\BookRepository;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class ShopController extends Controller
{
    private BookRepository $_bookRepository;
    
    public function __construct(BookRepository $bookRepository)
    {
        $this->_bookRepository = $bookRepository;
        
    }
    
    
    public function sortByOnSale(Request $request, $condition=null)
    {
        $perPage = $request->perPage ?? 12;
        if ($condition === "asc"){
            return response($this->_bookRepository->getDiscountBook()->orderByRaw('discount.discount_price ASC')->paginate($perPage));
        }
        else if ($condition === "desc"){
            return response($this->_bookRepository->getDiscountBook()->orderByRaw('discount.discount_price DESC')->paginate($perPage));
        }
        else{
            return response($this->_bookRepository->getDiscountBook()->orderByRaw('discount.discount_price ASC')->paginate($perPage));
        }
    }
    
    public function sortPopularBook(Request $request, $condition=null)
    {
        $perPage = $request->perPage ?? 12;
        if ($condition === "asc"){
            return response($this->_bookRepository->getPopularBook()->orderByRaw('final_price ASC')->paginate($perPage));  
        }
        else if ($condition === "desc"){
            return response($this->_bookRepository->getPopularBook()->orderByRaw('final_price DESC')->paginate($perPage)); 
        }
        else{
            return response($this->_bookRepository->getPopularBook()->orderByRaw('final_price ASC')->paginate($perPage)); 
        }
    }
    
    public function sortPriceBook(Request $request, $condition=null)
    {
        $perPage = $request->perPage ?? 12;
       
        if ($condition === "asc"){
            return response($this->_bookRepository->getBook()->orderByRaw('final_price ASC')->paginate($perPage)); 
        }
        else if ($condition === "desc"){
            return response($this->_bookRepository->getBook()->orderByRaw('final_price DESC')->paginate($perPage)); 
        }
        else {
            return response($this->_bookRepository->getBook()->orderByRaw('final_price ASC')->paginate($perPage));
        }
    }
}
