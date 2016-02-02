class Api::PinsController < ApplicationController
  before_action :require_logged_in!

  def index
    @pins = Pin.all.includes(:author, :comments)
  end

  def show
    @pin = Pin.find_by_id(params[:pin_id]).includes(:author, :comments)
  end

  def create
    @pin = current_user.pins.new(pin_params)
    
    if @pin.save
      render "api/pins/show"
    else
      render json: @pin, status: :unprocessable_entity
    end
  end

  def update
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :image, :url, :description, :board_id)
  end
end
