json.extract! comment, :id, :body, :author

# json.author do
#   json.extract! comment.author, :username
# end

json.pin do
  json.extract! comment.pin, :id, :title
end
