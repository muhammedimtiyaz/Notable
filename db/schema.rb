# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_01_28_063854) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "restaurants", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.string "name", null: false
    t.string "address", null: false
    t.integer "star", null: false
    t.string "city", null: false
    t.string "state", null: false
    t.integer "zipcode", null: false
    t.integer "phone_number", null: false
    t.string "open_time", null: false
    t.string "close_time", null: false
    t.string "cuisine", null: false
    t.string "description"
    t.string "logo", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address"], name: "index_restaurants_on_address"
    t.index ["city"], name: "index_restaurants_on_city"
    t.index ["cuisine"], name: "index_restaurants_on_cuisine"
    t.index ["name"], name: "index_restaurants_on_name"
    t.index ["star"], name: "index_restaurants_on_star"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname", null: false
    t.string "lastname", null: false
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["firstname"], name: "index_users_on_firstname"
    t.index ["lastname"], name: "index_users_on_lastname"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
