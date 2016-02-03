class Api::PinsController < ApplicationController
  before_action :require_logged_in!

  def index
    @pins = Pin.all.includes(:author, :comments, :photo)
  end

  def show
    @pin = Pin.includes(:author, :comments, :photo).find_by_id(params[:id])
  end

  def create
    #create photo
    # photo = Photo.new()
    #
    # if Pin.find(prev_pin.id) # if prevPin given
    #   photo = prev_pin.photo
    # elsif !http_url.empty?   # else if url given
    #   photo.image = http_url
    # elsif !upload.empty? # else if file uploaded
    #   photo.image =
    # #else default
    # end
    # photo.save!

    @pin = current_user.pins.new(
    title: title,
    description: description
    )



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
    params.require(:pin).permit(
    :title, :upload, :prev_pin, :http_url, :description, :board_id
    )
  end
end
