json.array! @pins do |pin|
  json.partial! 'pins/pin', pin: pin
end
