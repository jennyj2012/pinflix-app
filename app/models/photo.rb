class Photo < ActiveRecord::Base
  has_attached_file :image, default_url: ActionController::Base.helpers.asset_path("pinflix_logo.gif")
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
end
