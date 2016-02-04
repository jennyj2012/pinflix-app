class Api::BoardsController < ApplicationController
  before_action :require_logged_in!

  def index
    @boards = Board.all.includes(:pins)
  end

  def show
    @board = Board.includes(:pins).find_by_id(params[:id])
  end

  def create
    @board = current_user.boards.new(board_params)
    if @board.save
      render "api/boards/show"
    else
      render json: @board, status: :unprocessable_entity
    end
  end

  def update
    @board = current_user.boards.includes(:pins).find_by_id(params[:id])

    if @board.update(board_params)
      render "api/boards/show"
    else
      render json: @board, status: :unprocessable_entity
    end
  end

  def destroy
    @board = current_user.boards.find_by_id(params[:id])

    @board.destroy
    render "api/boards/show"
  end

  private
  def board_params
    params.require(:board).permit(:title, :description, :author_id)
  end
end
