# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
User.create!(
  username: "test",
  email: "test@gmail.com",
  password: "testing")
User.create!(
  username: "guest",
  email: "guest@gmail.com",
  password: "beourguest")

Board.destroy_all
Board.create!(
  title: "test board",
  author: User.find(1),
  description: "not necessary board description")

Pin.destroy_all
Pin.create(
  title: "test pin",
  url: "https://lyric2life.files.wordpress.com/2013/05/count-of-monte-cristo.jpg",
  description: "not necessary pin description"
  author: User.find(1),
  board: Board.find(1))
