class Pin < ActiveRecord::Base
  belongs_to :board
  belongs_to :author, class_name: "User", foreign_key: :author_id
  has_many :comments

  validates :title, :url, :author, :board, presence: true
  validates :title, length: { maximum: 140 }

  has_attached_file :image, default_url: "pinflix_logo.gif"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

end
