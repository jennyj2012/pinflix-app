json.extract! pin, :id, :title, :url, :description, :board_id

json.author do
  json.extract! pin.author, :id, :username
end

json.image_url asset_path(pin.image.url)
  
json.comments do
  json.partial! 'api/comments/comment', collection: pin.comments, as: :comment
end
