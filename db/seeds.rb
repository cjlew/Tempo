# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Database song / album seeder
require 'mp3info'
require 'taglib'
User.delete_all
Playlist.delete_all
Album.delete_all
Song.delete_all
# s3.list_objects(bucket:'tempo-chris-dev', max_keys:1).contents
# this will get the path on AWS to a certain file

class S3Runner


  S3BUCKET = Aws::S3::Client.new(
    region: ENV["s3_region"],
    access_key_id: ENV['s3_access_key_id'],
    secret_access_key: ENV['s3_secret_access_key']
  )

  def get_artist_image(path)
    artist_name = /artist_pics\/(.*).jpg/.match(path)[1]
    @artist_image[artist_name] = complete_path(path)
  end

  def get_cover_art(path)
    album_title = /cover_art\/(.*).jpg/.match(path)[1]
    @album_art[album_title] = complete_path(path)
  end

  def make_hash
    song_paths = []
    S3BUCKET.list_objects(bucket: @bucket).contents.each do |content|
      path = content.key
      if /artist_pics\/./.match(path)
        get_artist_image(path)
      elsif /cover_art\/./.match(path)
        get_cover_art(path)
      elsif /album-songs\/./.match(path)
        song_paths.push(complete_path(path))
      end
    end
    song_paths
  end

  def complete_path(path)
    path = path.gsub(/\s/, '+')
    'https://s3.us-east-2.amazonaws.com/' + @bucket + '/' + path
  end

  def fix_album_title(title)
    title.gsub('"', '')
  end

  def timify(seconds)
    min = seconds / 60
    sec = seconds % 60

    time = min.round.to_s + "\:" + sec.round.to_s
    time

  end

  def seed_mp3
    @song_paths.each do |song_path|
      audio = open(song_path)

      Mp3Info.open(audio) do |mp3|
        tag = mp3.tag
        artist = artist_seeded?(tag.artist)
        album = album_seeded?(fix_album_title(tag.album), artist, tag.year)
        build_song(tag.title, artist, album, tag.tracknum, song_path, mp3.length)
      end
    end
  end

  def build_song(title, artist, album, ord, song_path, duration)
    Song.create!(title: title, artist_id: artist.id, album_id: album.id,
                 ord: ord, audio: song_path, duration: duration)
  end

  def artist_seeded?(artist_name)
    artist = Artist.find_by(name: artist_name)
    unless artist
      artist = Artist.create!(name: artist_name)
    end
    artist.save!
    artist
  end

  def album_seeded?(album_name, artist, year)
    album = Album.find_by(title: album_name, artist_id: artist.id)
    unless album
      album = Album.create!(title: album_name, artist_id: artist.id, release_year:year)
    end
    album.save!
    album
  end

  def initialize
    @album_art = Hash.new
    @artist_image = Hash.new
    @bucket = 'tempo-chris-dev'
    @song_paths = make_hash
    seed_mp3
    seed_artwork
    seed_artist_image
  end

  def seed_artist_image
    @artist_image.each do |name, path|
      artist = Artist.find_by(name: name)
      artist.image = path
      artist.save!
    end
  end

  def seed_artwork
    @album_art.each do |title, path|
      album = Album.find_by(title: title)
      album.artwork = path
      album.save!
    end
  end
end


S3Runner.new


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
# playlist1 = Playlist.create!(creator_id: guest.id, title: 'My list')
# playlist2 = Playlist.create!(creator_id: guest2.id, title: 'Hot Jams')
# playlist3 = Playlist.create!(creator_id: guest2.id, title: 'Slow Songs')
# playlist4 = Playlist.create!(creator_id: guest.id, title: 'Hip op')
# playlist5 = Playlist.create!(creator_id: guest.id, title: 'RnR')
#
#
# PlaylistSongMembership.create!(playlist_id: playlist1.id, song_id: Song.first.id, playlist_ord: 1)
# PlaylistSongMembership.create!(playlist_id: playlist1.id, song_id: Song.last.id, playlist_ord: 2)
#
# PlaylistSongMembership.create!(playlist_id: playlist2.id, song_id: Song.last.id, playlist_ord: 1)
# PlaylistSongMembership.create!(playlist_id: playlist2.id, song_id: Song.first.id, playlist_ord: 2)

# PlaylistSongMembership.create!(playlist_id: playlist3.id, song_id: song3.id, playlist_ord: 1)
# PlaylistSongMembership.create!(playlist_id: playlist3.id, song_id: song7.id, playlist_ord: 2)
# PlaylistSongMembership.create!(playlist_id: playlist3.id, song_id: song10.id, playlist_ord: 3)
#
# PlaylistSongMembership.create!(playlist_id: playlist5.id, song_id: song1.id, playlist_ord: 1)
# PlaylistSongMembership.create!(playlist_id: playlist5.id, song_id: song6.id, playlist_ord: 2)
# PlaylistSongMembership.create!(playlist_id: playlist5.id, song_id: song9.id, playlist_ord: 3)
