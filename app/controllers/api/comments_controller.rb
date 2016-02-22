class Api::CommentsController < ApplicationController
  before_action :require_logged_in!

  def index
    @comments = Comment.all.includes(:author)
  end

  def show

  end

  def create
    comment = current_user.comments.new(comment_params)

    if comment.save
      @pin = Pin.includes(:comments).find(comment.pin_id)
      render "api/pins/show"
    else
      render json: comment, status: 422
    end
  end

  def update
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :pin_id)
  end
end
