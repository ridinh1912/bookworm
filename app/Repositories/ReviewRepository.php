<?php

namespace App\Repositories;

use App\Models\Book;
use App\Models\Review;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Validator;

class ReviewRepository extends BaseRepository
{
    public function __construct()
    {
        $this->query = Review::query();
    }
    public function getReviewByID(){
        $review=$this->query->rightJoin('book','book.id','review.book_id')
            ->select('book.id',DB::raw('ROUND(AVG(rating_start),1) as AR'),'review.review_title', 'review.review_details','review.rating_start','review.review_date')
            ->groupBy('book.id','review.review_title' ,'review.review_details','review.rating_start','review.review_date')
            ->orderBy('review.rating_start','desc');
        return $review;
    }
    public function createReview(Request $request){
        $review=new Review;
        $review->review_title=$request->get('title');
        $book_id=Book::find($request->get('book.id'));
        $review->rating_start=$request->get('star');
        $review->review_date=$request->get('date');
        $review->review_details=$request->get('detail');
        $book_id->review()->save($review);
        
    }
}