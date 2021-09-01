class UserSaberSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :saber
end
