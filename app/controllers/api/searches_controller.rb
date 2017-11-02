class Api::SearchesController < ApplicationController
  def index
    search = params[:query];

    @song_results = Song.where("lower(title) LIKE lower(?)", "%#{search}%");

    # Album.where('lower(title) LIKE lower(?)', "%#{search}%").each do |album|
    #   @song_results += album.songs
    # end
    #
    # Artist.where('lower(name) LIKE lower(?)', "%#{search}%").each do |artist|
    #   @song_results += artist.songs
    # end

    # @users_found = User.where('lower(username) LIKE lower(?) and id != ?', "%#{search}%", current_user.id);
  end
end
