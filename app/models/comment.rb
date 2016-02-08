class Comment < ActiveRecord::Base
  include PgSearch
  multisearchable :against => [:body],
  :using => [:tsearch, :trigram]

  belongs_to :pin
  belongs_to :author, class_name: "User", foreign_key: :author_id

  validates :body, presence: true;
end
