class CommentsController < ApplicationController
  def index
    @comments = Comments.all
  end

  def show
  end

  def create
  end

  def update
  end

  private
  def comment_params
    params.require(:comment).permit(:body, :user_id, :pin_id)
  end
end
