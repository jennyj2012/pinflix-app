class Api::PinsController < ApplicationController
  before_action :require_logged_in!

  def index
    if(params[:page])
      @pins = Pin.all.includes(:author, :comments, :photo).order("created_at DESC").page(params[:page]).per(15)
    elsif(params[:board_id])
      @pins = Pin.includes(:author, :comments, :photo).where(board_id: params[:board_id]).order("created_at DESC")
    else
      @pins = Pin.all.includes(:author, :comments, :photo).order("created_at DESC")
    end
  end

  def show
    @pin = Pin.includes(:author, :comments, :photo).find_by_id(params[:id])
  end

  def create
    board = current_user.boards.find(board_id)
    @pin = board.pins.new(pin_params)

    #create photo
    photo = Photo.new()
    #
    if prev_photo_id
      Pin.find(prev_photo_id) # if prevPin given
      photo = Photo.find(prev_photo_id)
    elsif http_url
      photo.image = URI.parse(http_url)
    # URI.parse
    elsif imageFile
      photo.image = imageFile;
    # #else default
    else
      photo.image = nil;
    end
    photo.save!
    @pin.photo = photo

    if @pin.save
      render "api/pins/show"
    else
      render json: @pin, status: 422
    end
  end

  def total
    @total = Pin.all.count
  end

  private
  def pin_params
    params.require(:pin).permit(:title, :description)
  end

  def board_id
    params.require(:pin).permit(:board_id)
    params[:pin][:board_id]
  end

  def imageFile
    params.require(:pin).permit(:imageFile)
    params[:pin][:imageFile]
  end

  def prev_photo_id
    params.require(:pin).permit(:prev_photo_id)
    params[:pin][:prev_photo_id]
  end

  def http_url
    params.require(:pin).permit(:http_url)
    params[:pin][:http_url]
  end
end
