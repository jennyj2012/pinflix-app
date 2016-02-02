json.extract! comment, :id, :body


json.author do
  json.partial! 'api/users/user', user: comment.author
end

# json.pin do
#   json.partial! 'api/pins/pin', pin: comment.pin
# end
