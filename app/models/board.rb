class Board < ActiveRecord::Base
  belongs_to :author, class_name: "User", foreign_key: :author_id
  has_many :pins

  validates :author, :title, presence: true

end
