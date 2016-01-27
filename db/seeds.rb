# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
user_1 = User.create!(
  username: "test",
  email: "test@gmail.com",
  password: "testing")
user_2 = User.create!(
  username: "guest",
  email: "guest@gmail.com",
  password: "beourguest")

Board.destroy_all
board_1 =Board.create!(
  title: "test board",
  author: user_1,
  description: "not necessary board description")

Pin.destroy_all
Pin.create(
  title: "Counte of Monte Cristo",
  url: "https://lyric2life.files.wordpress.com/2013/05/count-of-monte-cristo.jpg",
  description: "A story of revenge",
  author: user_1,
  board: board_1)
Pin.create(
  title: "Galaxy Quest",
  url: "http://ia.media-imdb.com/images/M/MV5BMjA0NjM1ODkyMl5BMl5BanBnXkFtZTcwODY0NDMzMg@@._V1_UY1200_CR111,0,630,1200_AL_.jpg",
  description: "It's out of this world",
  author: user_1,
  board: board_1)
Pin.create(
  title: "StarWars",
  url: "http://media.moddb.com/images/mods/1/23/22334/auto/7773769005_star-wars.jpg",
  description: "Spoiler: Darth Vader is Luke's Father",
  author: user_1,
  board: board_1)
