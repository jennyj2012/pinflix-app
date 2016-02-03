class Pin < ActiveRecord::Base
  has_many :comments
  belongs_to :board
  belongs_to :photo
  has_one :author, through: :board, source: :author
  has_one :image, through: :photo

  validates :title, :author, :board, presence: true
  validates :title, length: { maximum: 140 }

end
