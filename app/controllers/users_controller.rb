class UsersController < ApplicationController
  def new
  end

  def create
    @user = User.create(user_params)

    if @user.save
      log_in(@user)
      redirect_to user_url(@user)
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end

  end

  def show
    @user = User.find_by_id(params[:id])
  end


  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
