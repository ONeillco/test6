class ReviewsController < ApplicationController
  before_action :set_champion

  def index
    render json: Review.all
  end

  def create
    @review = current_user.champion.reviews.build(review_params)
    if @review.save
      render json: @review, include: [:user], status: :created
    else
      render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

  def champion_params
    params.permit(:name, :origin, :category)
  end
end
end
