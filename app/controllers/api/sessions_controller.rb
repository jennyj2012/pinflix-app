class Api::SessionsController < ApplicationController

  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: {}
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    @pins =  Pin.all.includes(:author, :comments)

    if @user
      log_in(@user)
      render "api/users/show"

    else
      render json: ["Wrong email/password combo!"], status: 401
    end
  end

  def destroy
    sign_out
    # redirect_to new_session_url
  end
end
