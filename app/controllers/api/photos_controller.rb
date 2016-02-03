class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
  end

  def show
    @photo = Photo.find_by_id(params[:id])
  end
end
