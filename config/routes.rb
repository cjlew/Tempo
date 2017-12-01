Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :playlists
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
    resources :songs, only: [:index, :show]
    resources :users, only: [:create, :show, :index]
    resource :sessions, only: [:create, :destroy]
    resources :searches, only: [:index]


    get 'playlists/featured', to: 'playlists#get_featured'


    post 'playlists/:playlist_id/add_song/:song_id', to: 'playlists#add_song'
    delete 'playlists/:playlist_id/remove_song/:song_id', to: 'playlists#remove_song'

    post 'users/:user_id/add_friend', to: 'users#add_friend'
    delete 'users/:user_id/remove_friend', to: 'users#remove_friend'

    post 'playlists/:playlist_id/follow', to: 'users#follow_playlist'
    delete 'playlists/:playlist_id/unfollow', to: 'users#unfollow_playlist'


  end
end
