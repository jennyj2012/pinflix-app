User.destroy_all
user_1 = User.create!(
  username: "Test",
  email: "test@gmail.com",
  password: "testing")
user_2 = User.create!(
  username: "Guest",
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
board_5 = Board.create!(
  title: "Rotten Tomato Favorites",
  author: user_2,
  description: "Top movies on rotten tomatoes")
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
pin_32 = Pin.new(
    title: "Kung Fu Panda 3",
    description: "Spoiler: Po meets his father",
    board: board_4)

    photo_32 = Photo.new();
    photo_32.image = URI.parse("http://images.m-magazine.com/uploads/posts/image/86054/kung-fu-panda-3.jpg")
    photo_32.save!

    pin_32.author = user_2;
    pin_32.photo = photo_32;
    pin_32.save!
pin_33 = Pin.new(
    title: "Bladerunner",
    description: "Cult movie with Harrison Ford",
    board: board_3)

    photo_33 = Photo.new();
    photo_33.image = URI.parse("http://cache.coverbrowser.com/image/soundtracks/1016-1.jpg")
    photo_33.save!

    pin_33.author = user_2;
    pin_33.photo = photo_33;
    pin_33.save!
pin_34 = Pin.new(
    title: "Battle Royal",
    description: "Japanese Hunger Games",
    board: board_1)

    photo_34 = Photo.new();
    photo_34.image = URI.parse("http://pop-break.com/wp-content/uploads/2014/11/Battle_royale_pochette.jpg")
    photo_34.save!

    pin_34.author = user_1;
    pin_34.photo = photo_34;
    pin_34.save!
pin_35 = Pin.new(
    title: "Four Feathers",
    description: "Heath Ledger",
    board: board_1)

    photo_35 = Photo.new();
    photo_35.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/c/cb/The_Four_Feathers_2002_movie.jpg")
    photo_35.save!

    pin_35.author = user_1;
    pin_35.photo = photo_35;
    pin_35.save!
pin_36 = Pin.new(
    title: "Stir Crazy",
    description: "Hilarious prison movie",
    board: board_3)

    photo_36 = Photo.new();
    photo_36.image = URI.parse("http://www.homevideos.com/movies-covers/Stir%20Crazy.jpg")
    photo_36.save!

    pin_36.author = user_2;
    pin_36.photo = photo_36;
    pin_36.save!
pin_37 = Pin.new(
    title: "Hot Fuzz",
    description: "Parody of police movies",
    board: board_2)

    photo_37 = Photo.new();
    photo_37.image = URI.parse("http://resizing.flixster.com/X3r7lD-cPG8SkBINeXeoPIzFc6Y=/800x1200/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/07/11170770_ori.jpg")
    photo_37.save!

    pin_37.author = user_2;
    pin_37.photo = photo_37;
    pin_37.save!
pin_38 = Pin.new(
    title: "Cool Runnings",
    description: "Luge team from Jamaica",
    board: board_3)

    photo_38 = Photo.new();
    photo_38.image = URI.parse("http://i.dailymail.co.uk/i/pix/2014/01/20/article-2542846-03B2AF880000044D-14_306x451.jpg")
    photo_38.save!

    pin_38.author = user_2;
    pin_38.photo = photo_38;
    pin_38.save!
pin_39 = Pin.new(
    title: "A Very Potter Musical",
    description: "Musical parody of Harry Potter books",
    board: board_1)

    photo_39 = Photo.new();
    photo_39.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/9/99/Very_Potter_Musical.jpg")
    photo_39.save!

    pin_39.author = user_1;
    pin_39.photo = photo_39;
    pin_39.save!
pin_40 = Pin.new(
    title: "Born in East LA",
    description: "Mexican American gets deported to Mexico",
    board: board_3)

    photo_40 = Photo.new();
    photo_40.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMjA0MTM0NDk4M15BMl5BanBnXkFtZTcwOTMzMDIyMQ@@._V1_UY268_CR3,0,182,268_AL_.jpg")
    photo_40.save!

    pin_40.author = user_2;
    pin_40.photo = photo_40;
    pin_40.save!
pin_41 = Pin.new(
    title: "Dinosaurs",
    description: "Kids TV series",
    board: board_3)

    photo_41 = Photo.new();
    photo_41.image = URI.parse("http://j.static-locatetv.com/images/content/4/888626_dinosaurs.jpg")
    photo_41.save!

    pin_41.author = user_2;
    pin_41.photo = photo_41;
    pin_41.save!
pin_42 = Pin.new(
    title: "The Muppets",
    description: "Timeless",
    board: board_1)

    photo_42 = Photo.new();
    photo_42.image = URI.parse("http://img.lum.dolimg.com/v1/images/open-uri20150422-12561-3n3ywv_b0210f50.jpeg?region=0%2C0%2C1000%2C1409")
    photo_42.save!

    pin_42.author = user_1;
    pin_42.photo = photo_42;
    pin_42.save!
pin_43 = Pin.new(
    title: "Dexter",
    description: "Spoiler: He's a serial killer",
    board: board_1)

    photo_43 = Photo.new();
    photo_43.image = URI.parse("http://cdn.ientry.com/sites/webpronews/pictures/dexter_1310284_616.jpg")
    photo_43.save!

    pin_43.author = user_1;
    pin_43.photo = photo_43;
    pin_43.save!
pin_44 = Pin.new(
    title: "House of Cards",
    description: "Political Drama",
    board: board_1)

    photo_44 = Photo.new();
    photo_44.image = URI.parse("http://cdn.bgr.com/2013/04/netflix-house-of-cards.jpg")
    photo_44.save!

    pin_44.author = user_1;
    pin_44.photo = photo_44;
    pin_44.save!
pin_45 = Pin.new(
    title: "Breaking Bad",
    description: "Crime Drama",
    board: board_2)

    photo_45 = Photo.new();
    photo_45.image = URI.parse("http://images.amcnetworks.com/amc.com/wp-content/uploads/2010/12/BB-S3-400x600.jpg")
    photo_45.save!

    pin_45.author = user_2;
    pin_45.photo = photo_45;
    pin_45.save!
pin_46 = Pin.new(
    title: "Game of Thrones",
    description: "Spoiler: Super duper violent",
    board: board_2)

    photo_46 = Photo.new();
    photo_46.image = URI.parse("http://abovethelaw.com/wp-content/uploads/2015/04/game-of-thrones.jpg")
    photo_46.save!

    pin_46.author = user_2;
    pin_46.photo = photo_46;
    pin_46.save!
pin_47 = Pin.new(
    title: "Narcos",
    description: "Story of Colombian drug lord, Pablo Escobar",
    board: board_1)

    photo_47 = Photo.new();
    photo_47.image = URI.parse("http://cdn1-www.comingsoon.net/assets/uploads/gallery/narcos/narcos0003.jpg")
    photo_47.save!

    pin_47.author = user_1;
    pin_47.photo = photo_47;
    pin_47.save!
pin_48 = Pin.new(
    title: "Ouran High School Host Club",
    description: "Spoiler: He's a She",
    board: board_1)

    photo_48 = Photo.new();
    photo_48.image = URI.parse("http://vignette3.wikia.nocookie.net/ouran/images/f/fa/Ouran_High_School_Host_Club_Postacie.jpg/revision/latest?cb=20150310085454&path-prefix=pl")
    photo_48.save!

    pin_48.author = user_1;
    pin_48.photo = photo_48;
    pin_48.save!
pin_49 = Pin.new(
    title: "Slumdog Millionaire",
    description: "Spoiler: He gets the girl",
    board: board_1)

    photo_49 = Photo.new();
    photo_49.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTU2NTA5NzI0N15BMl5BanBnXkFtZTcwMjUxMjYxMg@@._V1_UY1200_CR90,0,630,1200_AL_.jpg")
    photo_49.save!

    pin_49.author = user_1;
    pin_49.photo = photo_49;
    pin_49.save!
pin_50 = Pin.new(
    title: "Hotel Budapest",
    description: "I hear it's really long",
    board: board_4)

    photo_50 = Photo.new();
    photo_50.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/a/a6/The_Grand_Budapest_Hotel_Poster.jpg")
    photo_50.save!

    pin_50.author = user_2;
    pin_50.photo = photo_50;
    pin_50.save!
pin_51 = Pin.new(
    title: "Wizard of Oz",
    description: "An absolute masterpiece whose groundbreaking visuals and deft storytelling are still every bit as resonant, The Wizard of Oz is a must-see film for young and old.",
    board: board_5)

    photo_51 = Photo.new();
    photo_51.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTU0MTA2OTIwNF5BMl5BanBnXkFtZTcwMzA0Njk3OA@@._V1_UY1200_CR130,0,630,1200_AL_.jpg")
    photo_51.save!

    pin_51.author = user_2;
    pin_51.photo = photo_51;
    pin_51.save!
pin_52 = Pin.new(
    title: "The Third Man",
    description: "This atmospheric thriller is one of the undisputed masterpieces of cinema, and boasts iconic performances from Joseph Cotten and Orson Welles.",
    board: board_5)

    photo_52 = Photo.new();
    photo_52.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMjMwNzMzMTQ0Ml5BMl5BanBnXkFtZTgwNjExMzUwNjE@._V1_UX182_CR0,0,182,268_AL_.jpg")
    photo_52.save!

    pin_52.author = user_2;
    pin_52.photo = photo_52;
    pin_52.save!
pin_53 = Pin.new(
    title: "Citizen Kane",
    description: "Orson Welles's epic tale of a publishing tycoon's rise and fall is entertaining, poignant, and inventive in its storytelling, earning its reputation as a landmark achievement in film.",
    board: board_5)

    photo_53 = Photo.new();
    photo_53.image = URI.parse("http://resizing.flixster.com/t8rGYVWzMFqYIR4ISdHnr89O49Y=/180x240/dkpu1ddg7pbsk.cloudfront.net/movie/11/20/74/11207441_ori.jpg")
    photo_53.save!

    pin_53.author = user_2;
    pin_53.photo = photo_53;
    pin_53.save!
pin_54 = Pin.new(
    title: "Modern Times",
    description: "A slapstick skewering of industrialized America, Modern Times is as politically incisive as it is laugh-out-loud hilarious.",
    board: board_5)

    photo_54 = Photo.new();
    photo_54.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMjAyMTkxNjI5OF5BMl5BanBnXkFtZTYwMjI2MjA5._V1_UY1200_CR123,0,630,1200_AL_.jpg")
    photo_54.save!

    pin_54.author = user_2;
    pin_54.photo = photo_54;
    pin_54.save!
pin_55 = Pin.new(
    title: "All about Eve",
    description: "Smart, sophisticated, and devastatingly funny, All About Eve is a Hollywood classic that only improves with age.",
    board: board_5)

    photo_55 = Photo.new();
    photo_55.image = URI.parse("http://ecx.images-amazon.com/images/I/512QQW5Z5DL.jpg")
    photo_55.save!

    pin_55.author = user_2;
    pin_55.photo = photo_55;
    pin_55.save!
pin_56 = Pin.new(
    title: "The Cabinet of Dr. Caligari",
    description: "Arguably the first true horror film, The Cabinet of Dr. Caligari set a brilliantly high bar for the genre -- and remains terrifying nearly a century after it first stalked the screen.",
    board: board_5)

    photo_56 = Photo.new();
    photo_56.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/3/35/Das-Cabinet-des-Dr-Caligari-poster.jpg")
    photo_56.save!

    pin_56.author = user_2;
    pin_56.photo = photo_56;
    pin_56.save!
pin_57 = Pin.new(
    title: "The Godfather",
    description: "One of Hollywood's greatest critical and commercial successes, The Godfather gets everything right; not only did the movie transcend expectations, it established new benchmarks for American cinema.",
    board: board_5)

    photo_57 = Photo.new();
    photo_57.image = URI.parse("https://lh5.ggpht.com/koXV4NUZ7rRjm6LbBSvOLzDRe9drUeTmiJqvtvHVPbWRtOze1Giz1lBJFgRjzm4TOvZP=w300")
    photo_57.save!

    pin_57.author = user_2;
    pin_57.photo = photo_57;
    pin_57.save!
pin_58 = Pin.new(
    title: "E.T. The Extra-Terrestrial",
    description: "Playing as both an exciting sci-fi adventure and a remarkable portrait of childhood, Steven Spielberg's touching tale of a homesick alien remains a piece of movie magic for young and old.",
    board: board_5)

    photo_58 = Photo.new();
    photo_58.image = URI.parse("http://zaac.org/wordpress/wp-content/uploads/2013/09/et_el_extraterrestre_1982_4.jpg")
    photo_58.save!

    pin_58.author = user_2;
    pin_58.photo = photo_58;
    pin_58.save!
pin_59 = Pin.new(
    title: "A Hard Day's Night",
    description: "A Hard Day's Night, despite its age, is still a delight to watch and has proven itself to be a rock-and-roll movie classic.",
    board: board_5)

    photo_59 = Photo.new();
    photo_59.image = URI.parse("http://mvfilmsociety.com/film/wp-content/uploads/2014/05/a-hard-days-night-poster1.jpg")
    photo_59.save!

    pin_59.author = user_2;
    pin_59.photo = photo_59;
    pin_59.save!
pin_60 = Pin.new(
    title: "Metropolis",
    description: "A visually awe-inspiring science fiction classic from the silent era.",
    board: board_5)

    photo_60 = Photo.new();
    photo_60.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/0/06/Metropolisposter.jpg")
    photo_60.save!

    pin_60.author = user_2;
    pin_60.photo = photo_60;
    pin_60.save!
pin_61 = Pin.new(
    title: "It Happened One Night",
    description: "Capturing its stars and director at their finest, It Happened One Night remains unsurpassed by the countless romantic comedies it has inspired.",
    board: board_5)

    photo_61 = Photo.new();
    photo_61.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/thumb/4/40/Gable_ithapponepm_poster.jpg/220px-Gable_ithapponepm_poster.jpg")
    photo_61.save!

    pin_61.author = user_2;
    pin_61.photo = photo_61;
    pin_61.save!
pin_62 = Pin.new(
    title: "Singin' in the Rain",
    description: "Clever, incisive, and funny, Singin' in the Rain is a masterpiece of the classical Hollywood musical.",
    board: board_5)

    photo_62 = Photo.new();
    photo_62.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/f/f9/Singing_in_the_rain_poster.jpg")
    photo_62.save!

    pin_62.author = user_2;
    pin_62.photo = photo_62;
    pin_62.save!
pin_63 = Pin.new(
    title: "Laura",
    description: "A psychologically complex portrait of obsession, Laura is also a deliciously well-crafted murder mystery.",
    board: board_5)

    photo_63 = Photo.new();
    photo_63.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/f/f9/Singing_in_the_rain_poster.jpg")
    photo_63.save!

    pin_63.author = user_2;
    pin_63.photo = photo_63;
    pin_63.save!
pin_64 = Pin.new(
    title: "Inside Out",
    description: "Inventive, gorgeously animated, and powerfully moving, Inside Out is another outstanding addition to the Pixar library of modern animated classics.",
    board: board_5)

    photo_64 = Photo.new();
    photo_64.image = URI.parse("http://blogs-images.forbes.com/markhughes/files/2015/06/INSIDE-OUT-18.jpg")
    photo_64.save!

    pin_64.author = user_2;
    pin_64.photo = photo_64;
    pin_64.save!
pin_65 = Pin.new(
    title: "The Adventures of Robin Hood",
    description: "Errol Flynn thrills as the legendary title character, and the film embodies the type of imaginative family adventure tailor-made for the silver screen.",
    board: board_5)

    photo_65 = Photo.new();
    photo_65.image = URI.parse("https://trashnoirreviews.files.wordpress.com/2012/12/srfqgylvekopm9pxxckiugtmhwn.jpg")
    photo_65.save!

    pin_65.author = user_2;
    pin_65.photo = photo_65;
    pin_65.save!
pin_66 = Pin.new(
    title: "Repulsion",
    description: "Roman Polanski's first English film follows a schizophrenic woman's descent into madness, and makes the audience feel as claustrophobic as the character.",
    board: board_5)

    photo_66 = Photo.new();
    photo_66.image = URI.parse("http://4.bp.blogspot.com/-U809azRskZA/VG03nD4UMrI/AAAAAAAAA4M/PSYRhgcfc6o/s1600/affiche-Repulsion-1965-4.jpg")
    photo_66.save!

    pin_66.author = user_2;
    pin_66.photo = photo_66;
    pin_66.save!
pin_67 = Pin.new(
    title: "Snow White and the Seven Dwarfs",
    description: "With its involving story and characters, vibrant art, and memorable songs, Snow White and the Seven Dwarfs set the animation standard for decades to come.",
    board: board_5)

    photo_67 = Photo.new();
    photo_67.image = URI.parse("http://i.jeded.com/i/snow-white-and-the-seven-dwarfs.31581.jpg")
    photo_67.save!

    pin_67.author = user_2;
    pin_67.photo = photo_67;
    pin_67.save!
pin_68 = Pin.new(
    title: "Boyhood",
    description: "Epic in technical scale but breathlessly intimate in narrative scope, Boyhood is a sprawling investigation of the human condition.",
    board: board_5)

    photo_68 = Photo.new();
    photo_68.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/b/bb/Boyhood_film.jpg")
    photo_68.save!

    pin_68.author = user_2;
    pin_68.photo = photo_68;
    pin_68.save!
pin_69 = Pin.new(
    title: "North by Northwest",
    description: "Gripping, suspenseful, and visually iconic, this late-period Hitchcock classic laid the groundwork for countless action thrillers to follow.",
    board: board_5)

    photo_69 = Photo.new();
    photo_69.image = URI.parse("http://lucastheatre.com/wp-content/uploads/2015/10/NorthbyNorthwest-Web.jpg")
    photo_69.save!

    pin_69.author = user_2;
    pin_69.photo = photo_69;
    pin_69.save!
pin_70 = Pin.new(
    title: "King Kong",
    description: "King Kong explores the soul of a monster -- making audiences scream and cry throughout the film -- in large part due to Kong's breakthrough special effects.",
    board: board_5)

    photo_70 = Photo.new();
    photo_70.image = URI.parse("http://www.black-and-white-movies.com/images/king-kong-poster.jpg")
    photo_70.save!

    pin_70.author = user_2;
    pin_70.photo = photo_70;
    pin_70.save!
pin_71 = Pin.new(
    title: "The Maltese Falcon",
    description: "Suspenseful, labyrinthine, and brilliantly cast, The Maltese Falcon is one of the most influential noirs -- as well as a showcase for Humphrey Bogart at his finest.",
    board: board_5)

    photo_71 = Photo.new();
    photo_71.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/9/99/Falconm.JPG")
    photo_71.save!

    pin_71.author = user_2;
    pin_71.photo = photo_71;
    pin_71.save!
pin_72 = Pin.new(
    title: "The Battle of Algiers",
    description: "A powerful, documentary-like examination of the response to an occupying force, The Battle of Algiers hasn't aged a bit since its release in 1966.",
    board: board_5)

    photo_72 = Photo.new();
    photo_72.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/a/aa/The_Battle_of_Algiers_poster.jpg")
    photo_72.save!

    pin_72.author = user_2;
    pin_72.photo = photo_72;
    pin_72.save!
pin_73 = Pin.new(
    title: "Rear Window",
    description: "Hitchcock exerted full potential of suspense in this masterpiece.",
    board: board_5)

    photo_73 = Photo.new();
    photo_73.image = URI.parse("http://resizing.flixster.com/MBt9JmZmBHBK823lP_izkolZNHA=/800x1200/dkpu1ddg7pbsk.cloudfront.net/movie/11/17/78/11177805_ori.jpg")
    photo_73.save!

    pin_73.author = user_2;
    pin_73.photo = photo_73;
    pin_73.save!
pin_74 = Pin.new(
    title: "The Philadelphia Story",
    description: "Offering a wonderfully witty script, spotless direction from George Cukor, and typically excellent lead performances, The Philadelphia Story is an unqualified classic.",
    board: board_5)

    photo_74 = Photo.new();
    photo_74.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/5/54/The-Philadelphia-Story-(1940).jpg")
    photo_74.save!

    pin_74.author = user_2;
    pin_74.photo = photo_74;
    pin_74.save!
pin_75 = Pin.new(
    title: "Toy Story 2",
    description: "The rare sequel that arguably improves on its predecessor, Toy Story 2 uses inventive storytelling, gorgeous animation, and a talented cast to deliver another rich moviegoing experience for all ages.",
    board: board_5)

    photo_75 = Photo.new();
    photo_75.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTQ0OTU0NTcyNl5BMl5BanBnXkFtZTcwOTk5Mjc4OA@@._V1_SX640_SY720_.jpg")
    photo_75.save!

    pin_75.author = user_2;
    pin_75.photo = photo_75;
    pin_75.save!
pin_76 = Pin.new(
    title: "Sunset Boulevard",
    description: "Arguably the greatest movie about Hollywood, Billy Wilder's masterpiece Sunset Boulevard is a tremendously entertaining combination of noir, black comedy, and character study.",
    board: board_5)

    photo_76 = Photo.new();
    photo_76.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/0/0a/SunsetBoulevardfilmposter.jpg")
    photo_76.save!

    pin_76.author = user_2;
    pin_76.photo = photo_76;
    pin_76.save!
pin_77 = Pin.new(
    title: "Rashomon (In the Woods)",
    description: "One of legendary director Akira Kurosawa's most acclaimed films, Rashomon features an innovative narrative structure, brilliant acting, and a thoughtful exploration of reality versus perception.",
    board: board_5)

    photo_77 = Photo.new();
    photo_77.image = URI.parse("http://theasiancinemablog.com/wp-content/uploads/2013/02/rashomon_sp2.jpg")
    photo_77.save!

    pin_77.author = user_2;
    pin_77.photo = photo_77;
    pin_77.save!
pin_78 = Pin.new(
    title: "The Bride of Frankenstein",
    description: "An eccentric, campy, technically impressive, and frightening picture, James Whale's Bride of Frankenstein has aged remarkably well.",
    board: board_5)

    photo_78 = Photo.new();
    photo_78.image = URI.parse("https://christinawehner.files.wordpress.com/2015/10/bride-of-frankenstein-poster.jpg")
    photo_78.save!

    pin_78.author = user_2;
    pin_78.photo = photo_78;
    pin_78.save!
pin_79 = Pin.new(
    title: "Toy Story 3",
    description: "Deftly blending comedy, adventure, and honest emotion, Toy Story 3 is a rare second sequel that really works.",
    board: board_5)

    photo_79 = Photo.new();
    photo_79.image = URI.parse("http://ecx.images-amazon.com/images/I/61euyU4feZL.jpg")
    photo_79.save!

    pin_79.author = user_2;
    pin_79.photo = photo_79;
    pin_79.save!
pin_80 = Pin.new(
    title: "The Bicycle Thief",
    description: "This movie had tremendous influence on the development of Italian neorealist cinema and is considered one of the best films ever made. The simple but riveting story centers on the desperate search of an impoverished Roman bill poster for the man who stole his much-needed bicycle.",
    board: board_5)

    photo_80 = Photo.new();
    photo_80.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMjIzMzAyMzg1Nl5BMl5BanBnXkFtZTgwMzMyNzk0MTE@._V1_UY268_CR2,0,182,268_AL_.jpg")
    photo_80.save!

    pin_80.author = user_2;
    pin_80.photo = photo_80;
    pin_80.save!
pin_81 = Pin.new(
    title: "The 400 Blows",
    description: "A seminal French New Wave film that offers an honest, sympathetic, and wholly heartbreaking observation of adolescence without trite nostalgia.",
    board: board_5)

    photo_81 = Photo.new();
    photo_81.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTQzNTMzOTA2Ml5BMl5BanBnXkFtZTgwNDQ2OTI3MjE@._V1_UY268_CR0,0,182,268_AL_.jpg")
    photo_81.save!

    pin_81.author = user_2;
    pin_81.photo = photo_81;
    pin_81.save!
pin_82 = Pin.new(
    title: "M",
    description: "A landmark psychological thriller with arresting images, deep thoughts on modern society, and Peter Lorre in his finest performance.",
    board: board_5)

    photo_82 = Photo.new();
    photo_82.image = URI.parse("https://prodeoetpatria.files.wordpress.com/2011/01/m-movie-poster-4.jpg")
    photo_82.save!

    pin_82.author = user_2;
    pin_82.photo = photo_82;
    pin_82.save!
pin_83 = Pin.new(
    title: "Lawrence of Arabia",
    description: "The epic of all epics, Lawrence of Arabia cements director David Lean's status in the filmmaking pantheon with nearly four hours of grand scope, brilliant performances, and beautiful cinematography.",
    board: board_5)

    photo_83 = Photo.new();
    photo_83.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMzAwMjM4NzA2OV5BMl5BanBnXkFtZTcwMDI0NzAwMQ@@._V1_SX640_SY720_.jpg")
    photo_83.save!

    pin_83.author = user_2;
    pin_83.photo = photo_83;
    pin_83.save!
pin_84 = Pin.new(
    title: "The Treasure of the Sierra Madre",
    description: "Remade but never duplicated, this darkly humorous morality tale represents John Huston at his finest.",
    board: board_5)

    photo_84 = Photo.new();
    photo_84.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Treasuremadre.jpg/220px-Treasuremadre.jpg")
    photo_84.save!

    pin_84.author = user_2;
    pin_84.photo = photo_84;
    pin_84.save!
pin_85 = Pin.new(
    title: "Up",
    description: " An exciting, funny, and poignant adventure, Up offers an impeccably crafted story told with wit and arranged with depth, as well as yet another visual Pixar treat.",
    board: board_5)

    photo_85 = Photo.new();
    photo_85.image = URI.parse("http://img.lum.dolimg.com/v1/images/open-uri20150422-12561-17yo1p6_142a7bbd.jpeg")
    photo_85.save!

    pin_85.author = user_2;
    pin_85.photo = photo_85;
    pin_85.save!
pin_86 = Pin.new(
    title: "Seven Samurai",
    description: "Arguably Akira Kurosawa's masterpiece, The Seven Samurai is an epic adventure classic with an engrossing story, memorable characters, and stunning action sequences that make it one of the most influential films ever made.",
    board: board_5)

    photo_86 = Photo.new();
    photo_86.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/8/84/Seven_Samurai_movie_poster.jpg")
    photo_86.save!

    pin_86.author = user_2;
    pin_86.photo = photo_86;
    pin_86.save!
pin_87 = Pin.new(
    title: "Selma",
    description: "Fueled by a gripping performance from David Oyelowo, Selma draws inspiration and dramatic power from the life and death of Martin Luther King, Jr. -- but doesn't ignore how far we remain from the ideals his work embodied.",
    board: board_5)

    photo_87 = Photo.new();
    photo_87.image = URI.parse("https://lettherebemovies.files.wordpress.com/2015/09/selma-header.jpg")
    photo_87.save!

    pin_87.author = user_2;
    pin_87.photo = photo_87;
    pin_87.save!
pin_88 = Pin.new(
    title: "The Night of the Hunter",
    description: "Featuring Robert Mitchum's formidable performance as child-hunting preacher, The Night of the Hunter is a disturbing look at good and evil.",
    board: board_5)

    photo_88 = Photo.new();
    photo_88.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTExODUyNTY4OTNeQTJeQWpwZ15BbWU3MDI5NjY2MTQ@._V1_UY268_CR6,0,182,268_AL_.jpg")
    photo_88.save!

    pin_88.author = user_2;
    pin_88.photo = photo_88;
    pin_88.save!
pin_89 = Pin.new(
    title: "12 Angry Men",
    description: "Sidney Lumet's feature debut is a superbly written, dramatically effective courtroom thriller that rightfully stands as a modern classic.",
    board: board_5)

    photo_89 = Photo.new();
    photo_89.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/9/91/12_angry_men.jpg")
    photo_89.save!

    pin_89.author = user_2;
    pin_89.photo = photo_89;
    pin_89.save!
pin_90 = Pin.new(
    title: "Rebecca",
    description: "Hitchcock's first American film (and his only Best Picture winner), Rebecca is a masterpiece of haunting atmosphere, Gothic thrills, and gripping suspense.",
    board: board_5)

    photo_90 = Photo.new();
    photo_90.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/1/16/Rebecca_1940_film_poster.jpg")
    photo_90.save!

    pin_90.author = user_2;
    pin_90.photo = photo_90;
    pin_90.save!
pin_91 = Pin.new(
    title: "Frankenstein",
    description: "Still unnerving to this day, Frankenstein adroitly explores the fine line between genius and madness, and features Boris Karloff's legendary, frightening performance as the monster.",
    board: board_5)

    photo_91 = Photo.new();
    photo_91.image = URI.parse("https://scaryhorrorwriter.files.wordpress.com/2015/10/frank.jpg")
    photo_91.save!

    pin_91.author = user_2;
    pin_91.photo = photo_91;
    pin_91.save!
pin_92 = Pin.new(
    title: "Finding Nemo",
    description: "Breathtakingly lovely and grounded by the stellar efforts of a well-chosen cast, Finding Nemo adds another beautifully crafted gem to Pixar's crown.",
    board: board_5)

    photo_92 = Photo.new();
    photo_92.image = URI.parse("http://vignette4.wikia.nocookie.net/disney/images/b/ba/Finding_Nemo-_2003.jpg/revision/latest?cb=20130420022756")
    photo_92.save!

    pin_92.author = user_2;
    pin_92.photo = photo_92;
    pin_92.save!
pin_93 = Pin.new(
    title: "The Conformist",
    description: "A commentary on fascism and beauty alike, Bernardo Bertolucci's The Conformist is acclaimed for its sumptuous visuals and extravagant, artful cinematography.",
    board: board_5)

    photo_93 = Photo.new();
    photo_93.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTk1NDMzODYyNV5BMl5BanBnXkFtZTcwMzE2NTY0MQ@@._V1_UY268_CR4,0,182,268_AL_.jpg")
    photo_93.save!

    pin_93.author = user_2;
    pin_93.photo = photo_93;
    pin_93.save!
pin_94 = Pin.new(
    title: "A Streetcar Named Desire",
    description: "In the classic play by Tennessee Williams, brought to the screen by Elia Kazan, faded Southern belle Blanche DuBois (Vivien Leigh) comes to visit her pregnant sister, Stella (Kim Hunter), in a seedy section of New Orleans. Stella's boorish husband, Stanley Kowalski (Marlon Brando), not only regards Blanche's aristocratic affectations as a royal pain but also thinks she's holding out on inheritance money that rightfully belongs to Stella.",
    board: board_5)

    photo_94 = Photo.new();
    photo_94.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMTk3OTQ4MzY3M15BMl5BanBnXkFtZTcwODM0ODcyMg@@._V1_SX640_SY720_.jpg")
    photo_94.save!

    pin_94.author = user_2;
    pin_94.photo = photo_94;
    pin_94.save!
pin_95 = Pin.new(
    title: "Rosemary's Baby",
    description: "A frightening tale of Satanism and pregnancy that is even more disturbing than it sounds thanks to convincing and committed performances by Mia Farrow and Ruth Gordon.",
    board: board_5)

    photo_95 = Photo.new();
    photo_95.image = URI.parse("http://scriptshadow.net/wp-content/uploads/2013/04/rosemarys-baby-poster.jpg")
    photo_95.save!

    pin_95.author = user_2;
    pin_95.photo = photo_95;
    pin_95.save!
pin_96 = Pin.new(
    title: "L.A. Confidential",
    description: "Taut pacing, brilliantly dense writing and Oscar-worthy acting combine to produce a smart, popcorn-friendly thrill ride.",
    board: board_5)

    photo_96 = Photo.new();
    photo_96.image = URI.parse("http://static1.squarespace.com/static/52e554e4e4b06f6e5037b2ee/52e55a5fe4b0f61234f167c4/5330fb6be4b03ddf6eec843a/1395780377619/LAC-Poster.jpg?format=1000w")
    photo_96.save!

    pin_96.author = user_2;
    pin_96.photo = photo_96;
    pin_96.save!
pin_97 = Pin.new(
    title: "Dr. Strangelove",
    description: "Stanley Kubrick's brilliant Cold War satire remains as funny and razor-sharp today as it was in 1964.",
    board: board_5)

    photo_97 = Photo.new();
    photo_97.image = URI.parse("http://resizing.flixster.com/X2ini4ixLj_y12UNKHZrkZVKm80=/800x1200/dkpu1ddg7pbsk.cloudfront.net/movie/11/18/94/11189423_ori.jpg")
    photo_97.save!

    pin_97.author = user_2;
    pin_97.photo = photo_97;
    pin_97.save!
pin_98 = Pin.new(
    title: "The Wrestler",
    description: "Mickey Rourke gives a performance for the ages in The Wrestler, a richly affecting, heart-wrenching yet ultimately rewarding drama.",
    board: board_5)

    photo_98 = Photo.new();
    photo_98.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/3/3e/The_Wrestler_poster.jpg")
    photo_98.save!

    pin_98.author = user_2;
    pin_98.photo = photo_98;
    pin_98.save!
pin_99 = Pin.new(
    title: "The 39 Steps",
    description: "Packed with twists and turns, this essential early Alfred Hitchcock feature hints at the dazzling heights he'd reach later in his career.
",
    board: board_5)

    photo_99 = Photo.new();
    photo_99.image = URI.parse("https://upload.wikimedia.org/wikipedia/en/9/95/The_39_Steps_1935_British_poster.jpg")
    photo_99.save!

    pin_99.author = user_2;
    pin_99.photo = photo_99;
    pin_99.save!
pin_100 = Pin.new(
    title: "The Grapes of Wrath",
    description: "A potent drama that is as socially important today as when it was made, The Grapes of Wrath is affecting, moving, and deservedly considered an American classic.",
    board: board_5)

    photo_100 = Photo.new();
    photo_100.image = URI.parse("http://ia.media-imdb.com/images/M/MV5BMzgzNjcxNjg2M15BMl5BanBnXkFtZTcwMjQxNDQ3Mg@@._V1_SX640_SY720_.jpg")
    photo_100.save!

    pin_100.author = user_2;
    pin_100.photo = photo_100;
    pin_100.save!

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
