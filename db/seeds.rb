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
  url: "http://ia.media-imdb.com/images/M/MV5BNDcwMDc0ODAzOF5BMl5BanBnXkFtZTgwNTY2OTI1MDE@._V1_UX214_CR0,0,214,317_AL_.jpg",
  description: "Spoiler: Old time comedy. No sound",
  author: user_2,
  board: board_3)
pin_5 = Pin.create(
  title: "Train Explosion",
  url: "http://i.telegraph.co.uk/multimedia/archive/01209/Latvia_train4_1209761i.jpg",
  description: "Spoiler: No one survives",
  author: user_2,
  board: board_4)
pin_6 = Pin.create(
  title: "Bollywood",
  url: "http://www.curryculture.co.uk/wp-content/uploads/Bollywood-Dancing.jpg",
  description: "Spoiler: Musical. Guy gets the girl.",
  author: user_2,
  board: board_4)
pin_7 = Pin.create(
  title: "Creepy Woman",
  url: "http://cdn.collider.com/wp-content/uploads/2015/11/wonder-woman-movie-gal-gadot.jpg",
  description: "Spoiler: Woman is evil",
  author: user_2,
  board: board_2)
pin_8 = Pin.create(
  title: "Creepy Tree",
  url: "http://img10.deviantart.net/ce9d/i/2006/007/7/b/s_s__creepy_tree___1_by_shudder_stock.jpg",
  description: "Spoiler: Someone died at this tree",
  author: user_2,
  board: board_2)
pin_9 = Pin.create(
  title: "Marylin Monroe",
  url: "http://www.rantchic.com/wp-content/uploads/2014/08/Marilyn-Monroe-pics6.jpg",
  description: "Spoiler: Lovable and timeless comedy",
  author: user_2,
  board: board_3)
pin_10 = Pin.create(
  title: "Cary Grant",
  url: "http://www.doctormacro.com/Images/Grant,%20Cary/Annex/Annex%20-%20Grant,%20Cary%20(Only%20Angels%20Have%20Wings)_01.jpg",
  description: "Spoiler: You will lose your girlfriend",
  author: user_2,
  board: board_3)
pin_11 = Pin.create(
  title: "Brad Pitt",
  url: "http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_UY1200_CR88,0,630,1200_AL_.jpg",
  description: "Spoiler: Not really Brad Pitt",
  author: user_2,
  board: board_4)
pin_12 = Pin.create(
  title: "Lone Cowboy",
  url: "http://ecx.images-amazon.com/images/I/51XYVSG97HL._SY445_.jpg",
  description: "Spoiler: Strong Language. Lots of horses",
  author: user_2,
  board: board_3)
pin_13 = Pin.create(
  title: "Airship",
  url: "http://images-cdn.moviepilot.com/images/c_fill,h_610,w_811/t_mp_quality/eu9emattw0qvjlgnkisv/5-hayao-miyazaki-movies-you-have-to-see-before-you-die-527013.jpg",
  description: "Spoiler: Super Fantasy",
  author: user_2,
  board: board_4)
pin_14 = Pin.create(
  title: "Fancy Party",
  url: "http://ecx.images-amazon.com/images/I/51Pe5lnA-ZL.jpg",
  description: "Spoiler: Existential. Still don't know what it's about.",
  author: user_2,
  board: board_3)
pin_15 = Pin.create(
  title: "Ballet",
  url: "http://media.kics.com.au/-vb2boy4B0-DRYcMyhWhnA_medium.jpg",
  description: "Spoiler: Thought provoking struggles of a ballerina who turns evil.",
  author: user_2,
  board: board_2)
pin_16 = Pin.new(
  title: "Buster Keaton",
  url: "pinterest.com",
  description: "Buster Keaton URL upload!",
  author: user_2,
  board: board_3)
  pin_16.image = URI.parse("http://www.movingimagesource.us/images/articles/electric-house-20111201-145328-large.jpg").open
  pin_16.image_file_name = "buster_keaton.jpg"
  pin_16.image_content_type = "image/jpg"
  pin_16.save!

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
  pin: pin_4)
comment_6 = Comment.create(
  body: "You've got to watch this",
  author: user_2,
  pin: pin_5)
comment_7 = Comment.create(
  body: "I love the scene at 21:18",
  author: user_2,
  pin: pin_6)
comment_8 = Comment.create(
  body: "I totally disagree",
  author: user_2,
  pin: pin_7)
comment_9 = Comment.create(
  body: "This actor is so funny!",
  author: user_2,
  pin: pin_8)
comment_10 = Comment.create(
  body: "I still need to watch this.",
  author: user_2,
  pin: pin_9)
comment_11 = Comment.create(
  body: "I've heard so much about this",
  author: user_2,
  pin: pin_10)
comment_12 = Comment.create(
  body: "Arushi Loves this one",
  author: user_2,
  pin: pin_11)
comment_13 = Comment.create(
  body: "My mom loves this actor",
  author: user_2,
  pin: pin_12)
comment_14 = Comment.create(
  body: "I've got to get those girl's shoes",
  author: user_2,
  pin: pin_13)
comment_15 = Comment.create(
  body: "I'm going to buy the DVD",
  author: user_2,
  pin: pin_14)
comment_16 = Comment.create(
  body: "Hilarious!",
  author: user_2,
  pin: pin_15)
comment_17 = Comment.create(
  body: "One day I will watch this",
  author: user_2,
  pin: pin_13)
comment_18 = Comment.create(
  body: "I love the actress! So classic.",
  author: user_2,
  pin: pin_15)
