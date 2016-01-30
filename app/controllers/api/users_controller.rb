class Api::UsersController < ApplicationController
  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)

    if @user.save
      log_in(@user)
      # redirect_to root_url
    else
      # flash.now[:errors] = @user.errors.full_messages
      render :new, status: 422
    end

  end

  def show
    @user = User.find_by_id(params[:id])
    end


  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
