<?php

namespace App\Repositories;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Support\Facades\DB;

class BookRepository extends BaseRepository
{
    public function __construct()
    {
        $this->query = Book::query();
    }
    
    public function getRecommendedBook(){
        $recommendedBook=$this->query->join('review', 'book.id','=','review.book_id')
                    ->join('author', 'book.author_id','=','author.id')
                    ->leftJoin('discount','discount.book_id','=','book.id')
                    ->select('book.book_title','book.book_price','book.book_cover_photo','author.author_name',DB::raw('ROUND(AVG(rating_start),1) as AR'),DB::raw('case 
                    when now() >= discount.discount_start_date and discount.discount_end_date >= now() then discount.discount_price
                    when now() >= discount.discount_start_date and discount.discount_end_date is null then discount.discount_price
                    else book.book_price
                    end as final_price'))
                    ->groupBy('book.id', 'author.author_name','discount.discount_start_date','discount.discount_end_date','discount.discount_price')
                    ->orderByRaw('AR desc')
                    ->orderBy('final_price')
                    ;
        
        return $recommendedBook;
    }
    public function getDiscountBook()
    {
        $discountbook=$this->query->join('discount','book.id','=','discount.book_id')
                        ->Join('author', 'book.author_id','=','author.id')
                        ->where('discount.discount_start_date','<=',today())
                        ->where('discount.discount_end_date','>=',today())
                        ->orWhereNull('discount.discount_end_date')
                        ->select('book.author_id','book.book_title','author.author_name','book.book_price','book.book_cover_photo','discount.discount_price','discount.discount_start_date','discount.discount_end_date',
                        DB::raw('book.book_price - discount.discount_price as sub_price'))
                        ->orderBy('sub_price','DESC')
                        ;
        return $discountbook;
        
    }
    public function getPopularBook()
    {
        $popularBook=$this->query->join('review', 'book.id','=','review.book_id')
                    ->rightJoin('author', 'book.author_id','=','author.id')
                    ->leftJoin('discount','discount.book_id','=','book.id')
                    ->select('book.book_title','book.book_price','author.author_name','book.book_cover_photo',DB::raw('count(review.id) as count_review'),DB::raw('case 
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
        $book=$this->query->rightJoin('author', 'book.author_id','=','author.id')
                    ->leftJoin('discount','discount.book_id','=','book.id')
                    ->select('book.id','book.book_title','book.book_price','author.author_name','book.book_cover_photo','book.author_id','author.author_name',DB::raw('case 
                    when now() >= discount.discount_start_date and discount.discount_end_date >= now() then discount.discount_price
                    when now() >= discount.discount_start_date and discount.discount_end_date is null then discount.discount_price
                    else book.book_price
                    end as final_price'))
                    // ->groupByRaw('review.book_id, book_title, author_name, book_price,')
                    ->groupBy('book.id', 'author.author_name','discount.discount_start_date','discount.discount_end_date','discount.discount_price','author.id','author.author_name')
                    ;
        return $book;
    }
    public function getAuthor()
    {
        $author=$this->query->rightJoin('author', 'book.author_id','=','author.id')->select('author.author_name', 'author.id')->groupBy('author.id')->get();
        return $author;
    }
    public function getCategory()
    {
        $author=$this->query->rightJoin('category', 'book.category_id','=','category.id')->select('category.category_name', 'category.id')->groupBy('category.id')->get();
        return $author;
    }

    
    
    
    
}