json.extract! board, :id, :title, :description, :author_id

json.pins do
  json.partial! 'api/pins/pin', collection: board.pins, as: :pin
end

json.author do
  json.partial! 'api/users/user', user: board.author
end
