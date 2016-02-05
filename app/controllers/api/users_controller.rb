class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render "api/users/index"
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)

    if @user.save
      log_in(@user)
      render "api/users/show"
    else
      render json: ["Can't create user"], status: 422
    end

  end

  def show
    @user = User.find_by_id(params[:id])
    render "api/users/show"
  end


  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
