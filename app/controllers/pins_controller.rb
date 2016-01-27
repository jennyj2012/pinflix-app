class PinsController < ApplicationController
  def index
    @pins = Pin.all
  end

  def show
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
