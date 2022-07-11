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
    public function getReviewByID(Request $request)
    {
        $perPage = $request->perPage ?? 5;
        if ($request->filled('star')){
            return response($this->_reviewRepository->getReviewByID()->where('book.id',$request->input('id'))->where('review.rating_start',$request->star)->orderBy('review.review_date',$request->input('sort'))->paginate($perPage));
        }
        else {

            return response($this->_reviewRepository->getReviewByID()->where('book.id',$request->input('id'))->orderBy('review.review_date',$request->input('sort'))->paginate($perPage));
        }
    }
    public function getReviewByStar(Request $request)
    {
        $perPage = $request->perPage ?? 5;
    }
    public function getReviewByRating(Request $request,$sort="asc")
    {
        $perPage = $request->perPage ?? 5;
        return response($this->_reviewRepository->getReviewByID()->where('book.id',$request->input('book_id'))->where('review.rating_start','=',$request->input('star'))->orderByRaw("review.review_date {$sort}")->paginate($perPage));
    }
    
}
