<?php

namespace App\Repositories;
use App\Models\Book;
use Faker\Provider\Base;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BookRepository extends BaseRepository
{
    public function __construct()
    {
        $this->query = Book::query();
    }
    
    public function getRecommendedBook(){
        $recommendedBook=Book::join('review', 'book.id','=','review.book_id')
                    ->join('author', 'book.author_id','=','author.id')
                    ->leftJoin('discount','discount.book_id','=','book.id')
                    
                    ->select('book.book_title','book.book_price','author.author_name',DB::raw('ROUND(AVG(rating_start),1) as AR'),DB::raw('case 
                    when now() >= discount.discount_start_date and discount.discount_end_date >= now() then discount.discount_price
                    when now() >= discount.discount_start_date and discount.discount_end_date is null then discount.discount_price
                    else book.book_price
                    end as final_price'))
                    // ->groupByRaw('review.book_id, book_title, author_name, book_price,')
                    ->groupBy('book.id', 'author.author_name','discount.discount_start_date','discount.discount_end_date','discount.discount_price')
                    ->orderByRaw('AR desc')
                    ->orderBy('final_price')
                    // ->dd()
                    
                    ;
        
        return $recommendedBook;
    }
    public function getDiscountBook()
    {

        $discountbook=Book::join('discount','book.id','=','discount.book_id')->where('discount.discount_start_date','<=',today())
                        ->where('discount.discount_end_date','>=',today())
                        ->orWhereNull('discount.discount_end_date')
                        ->select('book.book_title','book.book_price','discount.discount_price','discount.discount_start_date','discount.discount_end_date',DB::raw('book.book_price - discount.discount_price as sub_price'))
                        ;
        return $discountbook;
        
    }
    public function getPopularBook()
    {
        $popularBook=Book::join('review', 'book.id','=','review.book_id')
                    ->join('author', 'book.author_id','=','author.id')
                    ->leftJoin('discount','discount.book_id','=','book.id')
                    
                    ->select('book.book_title','book.book_price','author.author_name',DB::raw('count(review.id) as count_review'),DB::raw('case 
                    when now() >= discount.discount_start_date and discount.discount_end_date >= now() then discount.discount_price
                    when now() >= discount.discount_start_date and discount.discount_end_date is null then discount.discount_price
                    else book.book_price
                    end as final_price'))
                    // ->groupByRaw('review.book_id, book_title, author_name, book_price,')
                    ->groupBy('book.id', 'author.author_name','discount.discount_start_date','discount.discount_end_date','discount.discount_price')
                    ->orderByRaw('count_review desc')
                    ;
        return $popularBook;
    }
    public function getBook()
    {
        $book=Book::join('author', 'book.author_id','=','author.id')
                    ->leftJoin('discount','discount.book_id','=','book.id')
                    
                    ->select('book.book_title','book.book_price','author.author_name',DB::raw('case 
                    when now() >= discount.discount_start_date and discount.discount_end_date >= now() then discount.discount_price
                    when now() >= discount.discount_start_date and discount.discount_end_date is null then discount.discount_price
                    else book.book_price
                    end as final_price'))
                    // ->groupByRaw('review.book_id, book_title, author_name, book_price,')
                    ->groupBy('book.id', 'author.author_name','discount.discount_start_date','discount.discount_end_date','discount.discount_price')
                    
                    ;
        return $book;
    }
    
    
}