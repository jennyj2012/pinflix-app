class PinsController < ApplicationController
  def index
    @pins = Pin.all.includes(:author, :comments)
  end

  def show
    @pin = Pin.find_by_id(params[:pin_id]).includes(:author, :comments)
  end

  def create
  end

  def update
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :url, :description, :board_id)
  end
end
