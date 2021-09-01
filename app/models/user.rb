class User < ApplicationRecord
  has_many :user_sabers
  has_many :sabers, through: :user_sabers
  validates :username, presence: true, uniqueness: true
  has_secure_password
end
