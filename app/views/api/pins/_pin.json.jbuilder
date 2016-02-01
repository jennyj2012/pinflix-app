json.extract! pin, :id, :title, :url, :description

json.author do
  json.extract! pin.author, :username
end

# json.image do
#   json.extract! pin.image
# end

json.comments do
  json.partial! 'api/comments/comment', collection: @comments, as: :comment
end
