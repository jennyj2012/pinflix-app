class Pin < ActiveRecord::Base
  belongs_to :board
  belongs_to :author, class_name: "User", foreign_key: :author_id
  has_many :comments
  
  validates :title, :url, :author, :board, presence: true
  validates :title, length: { maximum: 140 }

end
