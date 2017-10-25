# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Playlist.delete_all

guest = User.create!(
  username: 'guest',
  password: 'password',
  email: 'guest@guest.com'
)
guest2 = User.create!(username:'guest2', password: 'password', email:'guest2@guest.com')

playlist1 = Playlist.create!(
  creator_id: guest.id, title: 'My list'
)

playlist2 = Playlist.create!(
  creator_id: guest2.id, title: 'Hot Jams'
)

playlist3 = Playlist.create!(
  creator_id: guest2.id, title: 'Slow Songs'
)

playlist4 = Playlist.create!(
  creator_id: guest.id, title: 'Hip op'
)

playlist5 = Playlist.create!(
  creator_id: guest.id, title: 'RnR'
)
