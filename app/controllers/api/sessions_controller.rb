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

  def omniauth_facebook
    @user = User.find_or_create_by_auth_hash(auth_hash)
    log_in(@user)
    redirect_to root_url + '#/'
  end

  def destroy
    if current_user
      sign_out
      @user = current_user
      render "api/users/show"
    else
      render json: {}
    end
  end

  private
  def auth_hash
    request.env['omniauth.auth']
  end

end
