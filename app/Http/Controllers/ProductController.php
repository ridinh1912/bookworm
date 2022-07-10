<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Repositories\ReviewRepository;
use Illuminate\Queue\NullQueue;

class ProductController extends Controller
{
    private ReviewRepository $_reviewRepository;
    public function __construct(ReviewRepository $reviewRepository)
    {
        $this->_reviewRepository = $reviewRepository;
    }
    public function getReviewByID(Request $request,$sort="asc")
    {
        $perPage = $request->perPage ?? 5;
        return response($this->_reviewRepository->getReviewByID()->where('book.id',$request->input('book_id'))->orderByRaw("review.review_date {$sort}")->paginate($perPage));
    }
    public function getReviewByRating(Request $request,$sort="asc")
    {
        $perPage = $request->perPage ?? 5;
        return response($this->_reviewRepository->getReviewByID()->where('book.id',$request->input('book_id'))->where('review.rating_start','=',$request->input('star'))->orderByRaw("review.review_date {$sort}")->paginate($perPage));
    }
    
}
