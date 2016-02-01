class Api::PinsController < ApplicationController
  before_action :require_logged_in!

  def index
    @pins = Pin.all.includes(:author, :comments)
  end

  def show
    @pin = Pin.find_by_id(params[:pin_id]).includes(:author, :comments)
  end

  def create
    pin = Pin.new(pin_params)
    pin.author_id = current_user.id
    debugger
    if pin.save
      # render json: pin, include: :comments, include: :author
      render "api/pins/show"
    else
      render json: pin, status: :unprocessable_entity
    end
  end

  def update
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :image, :url, :description, :board_id)
  end
end
