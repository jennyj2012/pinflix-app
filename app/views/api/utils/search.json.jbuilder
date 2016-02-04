json.total_count @search_results.total_count

json.results do
  json.array! @search_results do |result|
    result = result.searchable

    if result.class == User
      json.partial!("api/users/user", user: result)
    elsif result.class == Pin
      json.partial!("api/pins/pin", pin: result)
    elsif result.class == Board
      json.partial!("api/boards/board", board: result)
    elsif result.class == Comment
      json.partial!("api/comments/comment", comment: result)
    end

    json._type result.class.to_s
  end
end
