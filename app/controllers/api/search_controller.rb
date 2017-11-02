
class Api::SearchesController < ApplicationController
  def index
    search = params[:query];

    @song_results = Song.where("title LIKE ?", "%#{search}%");

    Album.where('title LIKE ?', "%#{search}%").each do |album|
      @song_results += album.songs
    end

    Artist.where('name LIKE ?', "%#{search}%").each do |artist|
      @song_results += artist.songs
    end

    @users_found = User.where('username LIKE ? and id != ?', "%#{search}%", current_user.id);
  end
end
