class Board < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:title, :description]

  belongs_to :author, class_name: "User", foreign_key: :author_id
  has_many :pins, dependent: :destroy

  validates :author, :title, presence: true

end
