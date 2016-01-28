json.extract! comment, :id, :body

json.author do
  json.extract! comment.author, :username
end
