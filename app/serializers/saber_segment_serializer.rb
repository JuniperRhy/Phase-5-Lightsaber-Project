class SaberSegmentSerializer < ActiveModel::Serializer
  attributes :id
  has_one :saber
  has_one :segment
end
