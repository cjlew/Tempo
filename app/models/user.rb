# == Schema Information
#
# Table name: users
#
#  id                           :integer          not null, primary key
#  username                     :string           not null
#  email                        :string           not null
#  password_digest              :string           not null
#  session_token                :string           not null
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  profile_picture_file_name    :string
#  profile_picture_content_type :string
#  profile_picture_file_size    :integer
#  profile_picture_updated_at   :datetime
#

class User < ApplicationRecord
  validates :email, :username, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :profile_picture, default_url: 'profile_test.jpeg'
  validates_attachment_content_type :profile_picture,
                                    content_type: /\Aimage\/.*\Z/
  has_many :owned_playlists,
    foreign_key: :creator_id,
    primary_key: :id,
    class_name: 'Playlist',
    dependent: :destroy

  has_and_belongs_to_many :friends,
    class_name: 'User',
    join_table: :friendships,
    foreign_key: :user_id,
    association_foreign_key: :friend_id

  has_many :friendships,
    class_name: 'Friendship',
    foreign_key: :user_id

  has_many :playlist_followships,
    class_name: 'PlaylistFollowship',
    foreign_key: :user_id

  has_many :followed_playlists,
    through: :playlist_followships,
    source: :playlist


  attr_reader :password

  after_initialize :ensure_session_token

  def follow_playlist(playlist_id)
    PlaylistFollowship.create(user_id: self.id, playlist_id: playlist_id)
  end

  def unfollow_playlist(playlist_id)
    self.playlist_followships.find_by(playlist_id: playlist_id).delete
  end

  def add_friend(friend_id)
    Friendship.create!(user_id: self.id, friend_id: friend_id)
  end

  def remove_friend(friend_id)
    self.friendships.find_by(friend_id: friend_id).delete
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    generate_unique_session_token
    save!
    self.session_token
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def create_new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = create_new_session_token

    while User.find_by(session_token: self.session_token)
      self.session_token = create_new_session_token
    end

    self.session_token
  end

end
