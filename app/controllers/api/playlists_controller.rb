class Api::PlaylistsController < ApplicationController
  def new
  end

  def remove_song
    @playlist = Playlist.find(params[:playlist_id])
    @song = Song.find(params[:song_id])

    @playlist.remove_song(@song.id)
    render :show
  end

  def add_song
    @playlist = Playlist.find(params[:playlist_id])
    @song = Song.find(params[:song_id])

    @playlist.add_song(@song.id)
    render :show
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
      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end

  end

  def get_featured
    @playlists = Playlist.where(featured: true)
    render :show
  end

  def edit

  end

  def update
    @playlist = current_user.owned_playlists.find(params[:id])

    if @playlist.update(playlist_params)

      render :show
    else
      render json: @playlist.errors.full_messages, status: 422
    end
  end

  def destroy
    @playlist = current_user.owned_playlists.find(params[:id])
    @playlist.delete
    @playlist
    render :show
  end

  def playlist_params
    params.require(:playlist).permit(:title)
  end
end
