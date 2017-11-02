class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def add_friend
    friend = User.find(params[:user_id])
    current_user.add_friend(friend.id)
    @user = current_user
    render :show
  end

  def remove_friend
    friend = User.find(params[:user_id])
    current_user.remove_friend(friend.id)
    @user= current_user
    render :show
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :profile_picture)
  end
end
