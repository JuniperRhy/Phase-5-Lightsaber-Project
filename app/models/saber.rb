class Saber < ApplicationRecord
  has_many :user_sabers
  has_many :users, through: :user_sabers
  has_many :saber_segments
  has_many :segments, through: :saber_segments



end
