json.extract! comment, :id, :body, :author

# json.author do
#   json.extract! comment.author, :username
# end

json.pin do
  json.partial! 'api/pins/pin', commenbt.pin
end
