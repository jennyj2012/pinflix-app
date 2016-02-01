json.extract! board, :id, :title, :description

json.pins do
  json.partial! 'api/pins/pin', collection: board.pins, as: :pin
end
