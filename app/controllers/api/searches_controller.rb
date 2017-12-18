class Api::SearchesController < ApplicationController
  def index
    search = params[:query];

    @song_results = Song.where("lower(title) LIKE lower(?)", "%#{search}%");

    @album_results = Album.where('lower(title) LIKE lower(?)', "%#{search}%")

    @artist_results = Artist.where('lower(name) LIKE lower(?)', "%#{search}%")

    @users_results = User.where('lower(username) LIKE lower(?) and id != ?', "%#{search}%", current_user.id);
    
  end
end
