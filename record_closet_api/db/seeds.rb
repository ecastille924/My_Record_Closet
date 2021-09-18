# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# create_table "records", force: :cascade do |t|
#     t.string "title"
#     t.string "artist"
#     t.string "condition"
#     t.integer "year"
#     t.integer "rating"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#   end

Record.create(title: "Easter is Cancelled", artist: "The Darkness", condition: "mint", year: 2020, rating: 5)