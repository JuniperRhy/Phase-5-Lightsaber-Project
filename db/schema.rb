# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_08_31_200107) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "saber_segments", force: :cascade do |t|
    t.bigint "saber_id", null: false
    t.bigint "segment_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["saber_id"], name: "index_saber_segments_on_saber_id"
    t.index ["segment_id"], name: "index_saber_segments_on_segment_id"
  end

  create_table "sabers", force: :cascade do |t|
    t.string "name"
    t.string "hilt_color"
    t.string "blade_color"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "segments", force: :cascade do |t|
    t.string "name"
    t.string "segment_type"
    t.string "image_Url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "user_sabers", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "saber_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["saber_id"], name: "index_user_sabers_on_saber_id"
    t.index ["user_id"], name: "index_user_sabers_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "saber_segments", "sabers"
  add_foreign_key "saber_segments", "segments"
  add_foreign_key "user_sabers", "sabers"
  add_foreign_key "user_sabers", "users"
end
