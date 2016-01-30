class Api::BoardsController < ApplicationController
  before_action :require_logged_in!

  def index
    @boards = Board.all
  end

  def show
    @board = Board.find_by_id(params[:board_id])
  end

  def create
  end

  def update
  end

  private
  def board_params
    params.require(:board).permit(:title, :description, :author_id)
  end
end
