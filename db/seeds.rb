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
  password: "pinflixguest")

Board.destroy_all
board_1 = Board.create!(
  title: "test board",
  author: user_1,
  description: "not necessary board description")
board_2 = Board.create!(
  title: "Horror Movies",
  author: user_2,
  description: "Movies that will haunt your dreams")
board_3 = Board.create!(
  title: "Old Movies",
  author: user_2,
  description: "Movies from your grandmother's time")
board_4 = Board.create!(
  title: "Movies Recommended To Me",
  author: user_2,
  description: "Movies for when I'm down")

Pin.destroy_all
pin_1 = Pin.create(
  title: "Counte of Monte Cristo",
  url: "https://lyric2life.files.wordpress.com/2013/05/count-of-monte-cristo.jpg",
  description: "A story of revenge",
  author: user_1,
  board: board_1)
pin_2 = Pin.create(
  title: "Galaxy Quest",
  url: "http://ia.media-imdb.com/images/M/MV5BMjA0NjM1ODkyMl5BMl5BanBnXkFtZTcwODY0NDMzMg@@._V1_UY1200_CR111,0,630,1200_AL_.jpg",
  description: "It's out of this world",
  author: user_1,
  board: board_1)
pin_3 = Pin.create(
  title: "StarWars",
  url: "http://media.moddb.com/images/mods/1/23/22334/auto/7773769005_star-wars.jpg",
  description: "Spoiler: Darth Vader is Luke's Father",
  author: user_1,
  board: board_1)
pin_4 = Pin.create(
  title: "Charlie Chaplin",
  url: "https://s3.amazonaws.com/pinflix-dev/charlie-chaplin-392926_1920.jpg",
  description: "Spoiler: Old time comedy. No sound",
  author: user_2,
  board: board_3)
pin_5 = Pin.create(
  title: "Train Explosion",
  url: "https://s3.amazonaws.com/pinflix-dev/explosion-886855_1280.jpg",
  description: "Spoiler: No one survives",
  author: user_2,
  board: board_4)
pin_6 = Pin.create(
  title: "Bollywood",
  url: "https://s3.amazonaws.com/pinflix-dev/indian-622358_1920.jpg",
  description: "Spoiler: Musical. Guy gets the girl.",
  author: user_2,
  board: board_4)
pin_7 = Pin.create(
  title: "Creepy Woman",
  url: "https://s3.amazonaws.com/pinflix-dev/woman-1081873_1920.jpg",
  description: "Spoiler: Woman is evil",
  author: user_2,
  board: board_2)
pin_8 = Pin.create(
  title: "Creepy Tree",
  url: "https://s3.amazonaws.com/pinflix-dev/tree-407256_1920.jpg",
  description: "Spoiler: Someone died at this tree",
  author: user_2,
  board: board_2)
pin_9 = Pin.create(
  title: "Marylin Monroe",
  url: "https://s3.amazonaws.com/pinflix-dev/marilyn-monroe-392933_1920.jpg",
  description: "Spoiler: Lovable and timeless comedy",
  author: user_2,
  board: board_3)
pin_10 = Pin.create(
  title: "Cary Grant",
  url: "https://s3.amazonaws.com/pinflix-dev/cary-grant-392916_1280.jpg",
  description: "Spoiler: You will lose your girlfriend",
  author: user_2,
  board: board_3)
pin_11 = Pin.create(
  title: "Brad Pitt",
  url: "https://s3.amazonaws.com/pinflix-dev/brad-pitt-164880_1280.jpg",
  description: "Spoiler: Not really Brad Pitt",
  author: user_2,
  board: board_4)
pin_12 = Pin.create(
  title: "Lone Cowboy",
  url: "https://s3.amazonaws.com/pinflix-dev/man-1139066_1920.jpg",
  description: "Spoiler: Strong Language. Lots of horses",
  author: user_2,
  board: board_3)
pin_13 = Pin.create(
  title: "Airship",
  url: "https://s3.amazonaws.com/pinflix-dev/airship-1140366_1280.jpg",
  description: "Spoiler: Super Fantasy",
  author: user_2,
  board: board_4)
pin_14 = Pin.create(
  title: "Fancy Party",
  url: "https://s3.amazonaws.com/pinflix-dev/ingrid-bergman-392913_1280.jpg",
  description: "Spoiler: Existential. Still don't know what it's about.",
  author: user_2,
  board: board_3)
pin_15 = Pin.create(
  title: "Ballet",
  url: "https://s3.amazonaws.com/pinflix-dev/ballet-437990_1920.jpg",
  description: "Spoiler: Thought provoking struggles of a ballerina who turns evil.",
  author: user_2,
  board: board_2)


Comment.destroy_all
comment_1 = Comment.create(
  body: "This movie is the best",
  author: user_2,
  pin: pin_1)
comment_2 = Comment.create(
  body: "I watched it again last week",
  author: user_1,
  pin: pin_1)
comment_3 = Comment.create(
  body: "Star Trek parody",
  author: user_2,
  pin: pin_2)
comment_4 = Comment.create(
  body: "So funny",
  author: user_2,
  pin: pin_3)
comment_5 = Comment.create(
  body: "Never watching this again",
  author: user_2,
  pin: pin_3)
comment_6 = Comment.create(
  body: "You've got to watch this",
  author: user_2,
  pin: pin_3)
comment_7 = Comment.create(
  body: "I love the scene at 21:18",
  author: user_2,
  pin: pin_3)
comment_8 = Comment.create(
  body: "I totally disagree",
  author: user_2,
  pin: pin_3)
comment_9 = Comment.create(
  body: "This actor is so funny!",
  author: user_2,
  pin: pin_3)
comment_10 = Comment.create(
  body: "I still need to watch this.",
  author: user_2,
  pin: pin_3)
comment_11 = Comment.create(
  body: "I've heard so much about this",
  author: user_2,
  pin: pin_3)
comment_12 = Comment.create(
  body: "Arushi Loves this one",
  author: user_2,
  pin: pin_3)
comment_13 = Comment.create(
  body: "My mom loves this actor",
  author: user_2,
  pin: pin_3)
comment_14 = Comment.create(
  body: "I've got to get those girl's shoes",
  author: user_2,
  pin: pin_3)
comment_15 = Comment.create(
  body: "I'm going to buy the DVD",
  author: user_2,
  pin: pin_3)
comment_16 = Comment.create(
  body: "Hilarious!",
  author: user_2,
  pin: pin_3)
comment_17 = Comment.create(
  body: "One day I will watch this",
  author: user_2,
  pin: pin_3)
comment_18 = Comment.create(
  body: "I love the actress! So classic.",
  author: user_2,
  pin: pin_3)
