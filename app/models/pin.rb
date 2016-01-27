class Pin < ActiveRecord::Base
  validates :title, :url, :author, :board, presence: true
  validates :title, length: { maximum: 140 }

  belongs_to :board
  belongs_to :author
end
