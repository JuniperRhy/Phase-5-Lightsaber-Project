class Segment < ApplicationRecord
  has_many :saber_segments
  has_many :sabers, through: :saber_segments
end
