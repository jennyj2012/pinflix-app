json.extract! pin, :id, :title, :description, :board_id

json.author do
  json.extract! pin.author, :id, :username
end

json.board_name pin.board.title

json.photo do
  json.partial! 'api/photos/photo', photo: pin.photo
end

json.comments do
  json.partial! 'api/comments/comment', collection: pin.comments, as: :comment
end
