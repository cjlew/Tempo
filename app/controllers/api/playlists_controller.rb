class Api::PlaylistsController < ApplicationController
  def new
  end

  def index

    @playlists = Playlist.all
  end

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    @playlist.creator_id = current_user.id
    if @playlist.save
      render json: 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end

  end

  def edit

  end

  def update
    @playlist = current_user.owned_playlists.find(params[:id])

    if @playlist.update(playlist_params)
      render json: 'api/playlists/show'
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def delete
    @playlist = current_user.owned_playlists.find(params[:id])
    @playlist.delete
  end

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
