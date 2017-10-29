# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Database song / album seeder
# Components of macro made by David Webster
User.delete_all
Playlist.delete_all
Album.delete_all

def build_song(title, artist, album, ord)
  Song.create!(title: title, artist_id: artist.id, album_id: album.id, ord: ord)
end

def titleize_song(path)
  /([\d]+)\s(.+)(?:.mp3|.MP3)/.match(path.to_s)[-1]
end

def titleize(path)
  path = path.to_s.split('/').last.split('_').join(' ')

  if path[0] == "*"
    path = path[1..-1]
  else
    path = path.split('_').map(&:capitalize).join(' ')
  end

  path
end

def ord?(path)
  /([\d]+)\S/.match(path.to_s)[0].to_i
end

def is_image?(path)
  /jpg|jpeg|png|gif|tiff|svg/.match(path.to_s)
end

Pathname.new("#{Rails.root}/app/assets/artists").children.each do |artist|
  next if /DS_Store/.match(artist.to_s)

  artist_name = titleize(artist)

  @artist = Artist.create!(name: artist_name)

  artist.children.each do |child|
    next if /DS_Store/.match(child.to_s)


    if child.file?
      @artist.image = File.open(child.to_s)
      @artist.save!
    else
      child.children.each do |album|
        next if /DS_Store/.match(album.to_s)

        @album = Album.create!(title: titleize(album), release_year: 0000, artist_id: @artist.id)

        album.children.each do |song|
          next if /DS_Store/.match(song.to_s)
          if is_image?(song)
            @album.artwork = File.open(song.to_s)
            @album.save!
          else
            song_title = titleize_song(song)
            song_ord = ord?(song)
            @song = build_song(song_title, @artist, @album, song_ord)
            @song.audio = File.open(song.to_s)
            @song.save!
          end
        end

      end
    end
  end
end



guest = User.create!(username: 'guest', password: 'password', email: 'guest1@guest.com')
guest2 = User.create!(username:'guest2', password: 'password', email:'guest2@guest.com')

# artist1 = Artist.create!(name:'Chris Lew')
# artist2 = Artist.create!(name:'George')
# artist3 = Artist.create!(name:'Tyler The Creator')
# artist4 = Artist.create!(name:'Run The Jewels')
#
# album1 = Album.create!(title:'kids singing bad songs', release_year:1999, artist_id: artist1.id)
# album2 = Album.create!(title:'Flowerboy', release_year: 2017, artist_id: artist3.id)
# album3 = Album.create!(title:'Man on the moon', release_year: 2012, artist_id: artist2.id)
# album4 = Album.create!(title:'Star Wars', release_year: 2015, artist_id: artist4.id)
# album5 = Album.create!(title:'See you again', release_year: 2001, artist_id: artist1.id)
#
# song1 = Song.create!(album_id: album1.id, title:'that new new',
#       artist_id: album1.artist.id, explicit: 'true', ord:1)
# song2 = Song.create!(album_id: album1.id, title:'who dat boy',
#       artist_id:album1.artist.id, explicit: 'true', ord:2)
# song3 = Song.create!(album_id: album1.id, title:'so long',
#       artist_id: album1.artist.id, explicit: 'false', ord:3)
#
# song4 = Song.create!(album_id: album2.id, title:'right now',
#       artist_id: album2.artist.id, explicit: 'false', ord:1)
# song5 = Song.create!(album_id: album2.id, title:'Later',
#       artist_id: album2.artist.id, explicit: 'false', ord:2)
# song6 = Song.create!(album_id: album2.id, title:'Soon',
#       artist_id: album2.artist.id, explicit: 'false', ord:3)
# song7 = Song.create!(album_id: album2.id, title:'Never',
#       artist_id: album2.artist.id, explicit: 'true', ord:4)
#
# song8 = Song.create!(album_id: album3.id, title:'Potholes',
#       artist_id: album3.artist.id, explicit: 'false', ord:1)
# song9 = Song.create(album_id: album3.id, title:'drugs money cars',
#     artist_id: album3.artist.id, explicit: 'true', ord:2)
#
# song10 = Song.create!(album_id: album4.id, title:'what it do',
#       artist_id: album4.artist.id, explicit: 'false', ord:1)
#
#
#
playlist1 = Playlist.create!(creator_id: guest.id, title: 'My list')
playlist2 = Playlist.create!(creator_id: guest2.id, title: 'Hot Jams')
playlist3 = Playlist.create!(creator_id: guest2.id, title: 'Slow Songs')
playlist4 = Playlist.create!(creator_id: guest.id, title: 'Hip op')
playlist5 = Playlist.create!(creator_id: guest.id, title: 'RnR')


PlaylistSongMembership.create!(playlist_id: playlist1.id, song_id: Song.first.id, playlist_ord: 1)
PlaylistSongMembership.create!(playlist_id: playlist1.id, song_id: Song.last.id, playlist_ord: 2)

PlaylistSongMembership.create!(playlist_id: playlist2.id, song_id: Song.last.id, playlist_ord: 1)
PlaylistSongMembership.create!(playlist_id: playlist2.id, song_id: Song.first.id, playlist_ord: 2)

# PlaylistSongMembership.create!(playlist_id: playlist3.id, song_id: song3.id, playlist_ord: 1)
# PlaylistSongMembership.create!(playlist_id: playlist3.id, song_id: song7.id, playlist_ord: 2)
# PlaylistSongMembership.create!(playlist_id: playlist3.id, song_id: song10.id, playlist_ord: 3)
#
# PlaylistSongMembership.create!(playlist_id: playlist5.id, song_id: song1.id, playlist_ord: 1)
# PlaylistSongMembership.create!(playlist_id: playlist5.id, song_id: song6.id, playlist_ord: 2)
# PlaylistSongMembership.create!(playlist_id: playlist5.id, song_id: song9.id, playlist_ord: 3)
