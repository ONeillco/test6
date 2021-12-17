# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# snoop = Champion.create(name: "Snoop", origin: "Frenchy", category: "dogg")

puts "🌱 Seeding spices..."

# dingo = Dog.create(name: "Dingo", breed: "Supermutt")
# riley = Dog.create(name: "Riley", breed: "Akita")
# jude = Dog.create(name: "Jude", breed: "Labrador")
# spike = Dog.create(name: "Spike", breed: "Pitbull")
# frank = Dog.create(name: "Frank", breed: "Pug")
# snoop = Dog.create(name: "Snoop", breed: "Frenchy")



 Champion.create(name: "Spider-Man", origin: "Marvel", category: "superhero")
Champion.create(name: "Batman", origin: "DC", category: "superhero")
Champion.create(name: "Superman", origin: "DC", category: "superhero")
 Champion.create(name: "Captain America", origin: "Marvel", category: "superhero")
 Champion.create(name: "Hulk", origin: "Marvel", category: "superhero")
 Champion.create(name: "Scarlet Witch", origin: "Marvel", category: "superhero")
 Champion.create(name: "Hawkeye", origin: "Marvel", category: "superhero")
 Champion.create(name: "Black Widow", origin: "Marvel", category: "superhero")

puts "✅ Done seeding!"