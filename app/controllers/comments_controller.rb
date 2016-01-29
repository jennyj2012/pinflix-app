class CommentsController < ApplicationController
  before_action :require_logged_in!
  
  def index
    @comments = Comment.all.includes(:author)
  end

  def show

  end

  def create
    comment = Comment.create(comment_params)
    @pin = Pin.find(comment.pin_id)

    if comment.save
      # render json: pin, include: :comments, include: :author
      render "pins/show"
    else
      render json: comment, status: :unprocessable_entity
    end
  end

  def update
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :author_id, :pin_id)
  end
end
