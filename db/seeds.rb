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
  title: "Favorites",
  author: user_1,
  description: "Favorite Movies")
board_2 = Board.create!(
  title: "Action Movies",
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
#
Photo.destroy_all
Pin.destroy_all
pin_1 = Pin.new(
  title: "Counte of Monte Cristo",
  description: "A story of revenge",
  board: board_1)

  photo_1 = Photo.new();
  photo_1.image = URI.parse("https://lyric2life.files.wordpress.com/2013/05/count-of-monte-cristo.jpg")
  photo_1.save!

  pin_1.author = user_1;
  pin_1.photo = photo_1;
  pin_1.save!
pin_2 = Pin.new(
    title: "Galaxy Quest",
    description: "It's out of this world",
    board: board_1)

    photo_2 = Photo.new();
    photo_2.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMjA0NjM1ODkyMl5BMl5BanBnXkFtZTcwODY0NDMzMg@@._V1_UY1200_CR111,0,630,1200_AL_.jpg")
    photo_2.save!

    pin_2.author = user_1;
    pin_2.photo = photo_2;
    pin_2.save!
pin_3 = Pin.new(
    title: "StarWars",
    description: "Spoiler: Darth Vader is Luke's Father",
    board: board_1)

    photo_3 = Photo.new();
    photo_3.image = URI.parse("http://media.moddb.com/images/mods/1/23/22334/auto/7773769005_star-wars.jpg")
    photo_3.save!

    pin_3.author = user_1;
    pin_3.photo = photo_3;
    pin_3.save!
pin_4 = Pin.new(
        title: "Charlie Chaplin",
        description: "Spoiler: Old time comedy. No sound",
        board: board_3)

        photo_4 = Photo.new();
        photo_4.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BNDcwMDc0ODAzOF5BMl5BanBnXkFtZTgwNTY2OTI1MDE@._V1_UX214_CR0,0,214,317_AL_.jpg")
        photo_4.save!

        pin_4.author = user_2;
        pin_4.photo = photo_4;
        pin_4.save!
pin_5 = Pin.new(
    title: "Fight Club",
    description: "The first rule about fight club",
    board: board_1)

    photo_5 = Photo.new();
    photo_5.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMjIwNTYzMzE1M15BMl5BanBnXkFtZTcwOTE5Mzg3OA@@._V1_UY1200_CR88,0,630,1200_AL_.jpg")
    photo_5.save!

    pin_5.author = user_1;
    pin_5.photo = photo_5;
    pin_5.save!
pin_6 = Pin.new(
  title: "Lone Cowboy",
  description: "Spoiler: Strong Language. Lots of horses",
  board: board_3)

  photo_6 = Photo.new();
  photo_6.image = URI.parse("http://ecx.images-amazon.com/images/I/51XYVSG97HL._SY445_.jpg")
  photo_6.save!

  pin_6.author = user_2;
  pin_6.photo = photo_6;
  pin_6.save!
pin_7 = Pin.new(
    title: "Some Like It Hot",
    description: "Best Movie of all time. Has everything",
    board: board_3)

    photo_7 = Photo.new();
    photo_7.image = URI.parse("http://www.neatorama.com/wp-content/uploads/2011/11/240_sometitle.jpg")
    photo_7.save!

    pin_7.author = user_2;
    pin_7.photo = photo_7;
    pin_7.save!
pin_8 = Pin.new(
    title: "Breakfast At Tiffany's",
    description: "Audrey Hepburn. Classic.",
    board: board_3)

    photo_8 = Photo.new();
    photo_8.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/a/a9/Breakfast_at_Tiffanys.jpg")
    photo_8.save!

    pin_8.author = user_2;
    pin_8.photo = photo_8;
    pin_8.save!
pin_9 = Pin.new(
    title: "Die Hard",
    description: "Yippie Ki Yay",
    board: board_2)

    photo_9 = Photo.new();
    photo_9.image = URI.parse("http://schmoesknow.com/wp-content/uploads/2014/03/die-hard-movie-poster-1988.jpg")
    photo_9.save!

    pin_9.author = user_2;
    pin_9.photo = photo_9;
    pin_9.save!
pin_10 = Pin.new(
    title: "Rush Hour",
    description: "Action comedy",
    board: board_2)

    photo_10 = Photo.new();
    photo_10.image = URI.parse("http://ecx.images-amazon.com/images/I/51rK4PS6BHL._SX940_.jpg")
    photo_10.save!

    pin_10.author = user_2;
    pin_10.photo = photo_10;
    pin_10.save!
pin_11 = Pin.new(
    title: "Lethal Weapon",
    description: "Action comedy",
    board: board_2)

    photo_11 = Photo.new();
    photo_11.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/d/d9/Lethal_weapon1.jpg")
    photo_11.save!

    pin_11.author = user_2;
    pin_11.photo = photo_11;
    pin_11.save!
pin_12 = Pin.new(
    title: "Office Space",
    description: "Crime comedy",
    board: board_4)

    photo_12 = Photo.new();
    photo_12.image = URI.parse("http://ecx.images-amazon.com/images/I/51S7MWB56VL.jpg")
    photo_12.save!

    pin_12.author = user_2;
    pin_12.photo = photo_12;
    pin_12.save!
pin_13 = Pin.new(
    title: "Happy Thank You More Please",
    description: "Indie Drama",
    board: board_4)

    photo_13 = Photo.new();
    photo_13.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BNTk3NDgwODQ5NF5BMl5BanBnXkFtZTcwMTY5MjMzNA@@._V1_SX640_SY720_.jpg")
    photo_13.save!

    pin_13.author = user_2;
    pin_13.photo = photo_13;
    pin_13.save!
pin_14 = Pin.new(
    title: "SpaceBalls",
    description: "Star Wars parody",
    board: board_4)

    photo_14 = Photo.new();
    photo_14.image = URI.parse("https://fanart.tv/fanart/movies/957/movieposter/spaceballs-5229798c85421.jpg")
    photo_14.save!

    pin_14.author = user_2;
    pin_14.photo = photo_14;
    pin_14.save!
pin_15 = Pin.new(
    title: "Warriors",
    description: "Crime Drama",
    board: board_4)

    photo_15 = Photo.new();
    photo_15.image = URI.parse("http://www.theconeyislandblog.com/wp-content/uploads/2015/07/Warriors-Movie-Poster.jpg")
    photo_15.save!

    pin_15.author = user_2;
    pin_15.photo = photo_15;
    pin_15.save!
pin_16 = Pin.new(
  title: "Buster Keaton",
  description: "Buster Keaton URL upload!",
  board: board_3)

  photo_16 = Photo.new();
  photo_16.image = URI.parse("http://www.movingimagesource.us/images/articles/electric-house-20111201-145328-large.jpg")
  photo_16.save!

  pin_16.author = user_2;
  pin_16.photo = photo_16;
  pin_16.save!
pin_17 = Pin.new(
    title: "Dawn of the Dead",
    description: "Zombies",
    board: board_4)

    photo_17 = Photo.new();
    photo_17.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTI4OTU2NjY5OF5BMl5BanBnXkFtZTYwOTQ2Mzg3._V1_SX640_SY720_.jpg")
    photo_17.save!

    pin_17.author = user_2;
    pin_17.photo = photo_17;
    pin_17.save!
pin_18 = Pin.new(
    title: "Hot Tub Time Machine",
    description: "Comedy",
    board: board_4)

    photo_18 = Photo.new();
    photo_18.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/3/30/Hottubtimemachinecover.jpg")
    photo_18.save!

    pin_18.author = user_2;
    pin_18.photo = photo_18;
    pin_18.save!
pin_19 = Pin.new(
    title: "The Martian",
    description: "Highly acclaimed",
    board: board_4)

    photo_19 = Photo.new();
    photo_19.image = URI.parse("https://reflectionandchoice.files.wordpress.com/2015/10/maxresdefault.jpg")
    photo_19.save!

    pin_19.author = user_2;
    pin_19.photo = photo_19;
    pin_19.save!
pin_19 = Pin.new(
    title: "Kung Fu Panda 3",
    description: "Spoiler: Po meets his father",
    board: board_4)

    photo_19 = Photo.new();
    photo_19.image = URI.parse("http://images.m-magazine.com/uploads/posts/image/86054/kung-fu-panda-3.jpg")
    photo_19.save!

    pin_19.author = user_2;
    pin_19.photo = photo_19;
    pin_19.save!
pin_20 = Pin.new(
    title: "Renevant",
    description: "My mom likes Robert Redford better",
    board: board_4)

    photo_20 = Photo.new();
    photo_20.image = URI.parse("http://static.rogerebert.com/uploads/movie/movie_poster/the-revenant-2015/large_large_oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg")
    photo_20.save!

    pin_20.author = user_2;
    pin_20.photo = photo_20;
    pin_20.save!
pin_21 = Pin.new(
    title: "The Cube",
    description: "Thriller Mystery",
    board: board_4)

    photo_21 = Photo.new();
    photo_21.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/0/0c/Cube_The_Movie_Poster_Art.jpg")
    photo_21.save!

    pin_21.author = user_2;
    pin_21.photo = photo_21;
    pin_21.save!
pin_22 = Pin.new(
    title: "The Search For General Tso",
    description: "Documentary",
    board: board_4)

    photo_22 = Photo.new();
    photo_22.image = URI.parse("http://ecx.images-amazon.com/images/I/51RH0fgWJOL._SX200_QL80_.jpg")
    photo_22.save!

    pin_22.author = user_2;
    pin_22.photo = photo_22;
    pin_22.save!
pin_23 = Pin.new(
    title: "Dr. Horrible's Sing Along Blog",
    description: "Joss Whedon and NPH in all their glory",
    board: board_1)

    photo_23 = Photo.new();
    photo_23.image = URI.parse("http://vignette4.wikia.nocookie.net/drhorrible/images/1/18/DrHorrible_cv.jpg/revision/latest?cb=20120430120021")
    photo_23.save!

    pin_23.author = user_1;
    pin_23.photo = photo_23;
    pin_23.save!
pin_24 = Pin.new(
    title: "Stardust",
    description: "Fantasy. It was a book!",
    board: board_1)

    photo_24 = Photo.new();
    photo_24.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/6/6f/Stardust_promo_poster.jpg")
    photo_24.save!

    pin_24.author = user_1;
    pin_24.photo = photo_24;
    pin_24.save!
pin_25 = Pin.new(
    title: "Thank you for smoking",
    description: "How to lobby",
    board: board_1)

    photo_25 = Photo.new();
    photo_25.image = URI.parse("http://ecx.images-amazon.com/images/I/91%2BNVEkxC6L._SL1500_.jpg")
    photo_25.save!

    pin_25.author = user_1;
    pin_25.photo = photo_25;
    pin_25.save!
pin_26 = Pin.new(
    title: "Say Anything",
    description: "Favorite 80's movie",
    board: board_1)

    photo_26 = Photo.new();
    photo_26.image = URI.parse("http://ecx.images-amazon.com/images/I/41CTVK8CVSL._SY300_.jpg")
    photo_26.save!

    pin_26.author = user_1;
    pin_26.photo = photo_26;
    pin_26.save!
pin_26 = Pin.new(
    title: "Kick-Ass",
    description: "Guy tries to be a superhero in real life",
    board: board_1)

    photo_26 = Photo.new();
    photo_26.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/3/30/Kick-Ass_film_poster.jpg")
    photo_26.save!

    pin_26.author = user_1;
    pin_26.photo = photo_26;
    pin_26.save!
pin_27 = Pin.new(
    title: "Underworld",
    description: "Vampires hunt werewolves",
    board: board_1)

    photo_27 = Photo.new();
    photo_27.image = URI.parse("http://www.sonypictures.com/movies/underworldawakening/assets/images/onesheet.jpg")
    photo_27.save!

    pin_27.author = user_1;
    pin_27.photo = photo_27;
    pin_27.save!
pin_28 = Pin.new(
    title: "10 things I hate about you",
    description: "Based on shakespeare",
    board: board_1)

    photo_28 = Photo.new();
    photo_28.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTI4MzU5OTc2MF5BMl5BanBnXkFtZTYwNzQxMjc5._V1_UY1200_CR107,0,630,1200_AL_.jpg")
    photo_28.save!

    pin_28.author = user_1;
    pin_28.photo = photo_28;
    pin_28.save!
pin_29 = Pin.new(
    title: "Singing in the Rain",
    description: "Best Musical Ever",
    board: board_2)

    photo_29 = Photo.new();
    photo_29.image = URI.parse("https://swishandflicks.files.wordpress.com/2012/05/singing-in-the-rain1.jpeg")
    photo_29.save!

    pin_29.author = user_2;
    pin_29.photo = photo_29;
    pin_29.save!
pin_30 = Pin.new(
    title: "Indiana Jones",
    description: "Spoiler: Don't watch the fourth",
    board: board_1)

    photo_30 = Photo.new();
    photo_30.image = URI.parse("http://usercontent2.hubimg.com/3416269_f520.jpg")
    photo_30.save!

    pin_30.author = user_1;
    pin_30.photo = photo_30;
    pin_30.save!
pin_31 = Pin.new(
    title: "Shawshank Redemption",
    description: "Spoiler: It's always the quiet ones",
    board: board_1)

    photo_31 = Photo.new();
    photo_31.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_UY1200_CR88,0,630,1200_AL_.jpg")
    photo_31.save!

    pin_31.author = user_1;
    pin_31.photo = photo_31;
    pin_31.save!
#
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
  body: "Aarushi Loves this one",
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
