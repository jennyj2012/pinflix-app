json.extract! pin, :id, :title, :url, :description

json.author do
  json.extract! pin.author, :username
end
