class Api::CommentsController < ApplicationController
  before_action :require_logged_in!

  def index
    @comments = Comment.all.includes(:author)
  end

  def show

  end

  def create
    comment = Comment.new(comment_params)
    comment.author_id = current_user.id
    @pin = Pin.find(comment.pin_id)

    if comment.save
      # render json: pin, include: :comments, include: :author
      render "api/pins/show"
    else
      render json: comment, status: :unprocessable_entity
    end
  end

  def update
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :pin_id)
  end
end
