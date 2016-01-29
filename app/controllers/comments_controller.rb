class CommentsController < ApplicationController
  def index
    @comments = Comment.all.includes(:author)
  end

  def show

  end

  def create
    comment = Comment.create(comment_params).includes(:author)
    pin = Pin.find(comment.pin_id)

    if comment.save
      render json: pin, include: :comments
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
