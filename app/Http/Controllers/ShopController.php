<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Repositories\BookRepository;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Models\Book;

class ShopController extends Controller
{
    private BookRepository $_bookRepository;
    
    public function __construct(BookRepository $bookRepository)
    {
        $this->_bookRepository = $bookRepository;
    }
    
    //sort
    public function sortByOnSale(Request $request)
    {
        $perPage = $request->perPage ?? 5;
        
        return response($this->_bookRepository->getDiscountBook()->orderByRaw("discount.discount_price ASC")->paginate($perPage)); 
        
        
        
    }
    
    public function sortPopularBook(Request $request)
    {
        $perPage = $request->perPage ?? 5;
        return response($this->_bookRepository->getPopularBook()->orderByRaw('final_price ASC')->paginate($perPage));  
    }
    
    public function sortPriceBook(Request $request, $condition='ASC')
    {
        $perPage = $request->perPage ?? 5;
        return response($this->_bookRepository->getBook()->orderByRaw("final_price {$condition}")->paginate($perPage)); 
    }



    //filter
    public function filter(Request $request){
        $perPage = $request->perPage ?? 5;
        
        $book=$this->_bookRepository->getBook();
        if ($request->filled('author_id')){    
            return $book->where('author_id',$request->author_id)->orderByRaw('final_price ASC')->paginate($perPage);
        }
        else if ($request->filled('category_id')){
            return $book->where('category_id',$request->category_id)->orderByRaw('final_price ASC')->paginate($perPage);
        }
        
        
    }

    
    public function getBookByID(Request $request)
    {
        return response($this->_bookRepository->getBook()->where('book.id',$request->input('id'))->get());
    }
    public function getAuthorName()
    {
        return response($this->_bookRepository->getAuthor());
    }
    
    public function getCategory()
    {
        return response($this->_bookRepository->getCategory());
    }public function getBookByRatingStar(Request $request)
    {
        $perPage = $request->perPage ?? 5;
        return response($this->_bookRepository->getBookByRatingStars($request)->paginate($perPage));
    }
    
    
}
