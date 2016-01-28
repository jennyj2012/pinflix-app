class BoardsController < ApplicationController
  def index
    @boards = Board.all
  end

  def show
  end

  def create
  end

  def update
  end

  private
  def board_params
    params.require(:board).permit(:body, :user_id, :pin_id)
  end
end
