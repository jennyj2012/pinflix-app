class Board < ActiveRecord::Base
  validates :author, :title, presence: true

  belongs_to :author
  has_many :pins
end
