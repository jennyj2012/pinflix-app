json.extract! pin, :id, :title, :url, :description

json.author do
  json.extract! pin.author, :username
end

json.comments do
  json.array! pin.comments do |comment|
    json.partial! 'comments/comment', comment: comment
  end
end
