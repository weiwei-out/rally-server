class UserSerializer < ActiveModel::Serializer
  # attributes :id, :username, :email, :password_digest
  attributes :id, :username, :email
end
