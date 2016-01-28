class Comment < ActiveRecord::Base
  belongs_to :pin
  belongs_to :author, class_name: "User", foreign_key: :author_id

  validates :body, presence: true;
end
