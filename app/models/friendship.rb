# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ApplicationRecord
  validates :user_id, :friend_id, presence: true

  belongs_to :friender,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :friendee,
    foreign_key: :friend_id,
    class_name: 'User'
end
