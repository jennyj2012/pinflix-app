class Api::BoardsController < ApplicationController
  before_action :require_logged_in!

  def index
    @boards = Board.all.includes(:pins)
  end

  def show
    @board = Board.includes(:pins).find_by_id(params[:id])
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
