class CreateUserSabers < ActiveRecord::Migration[6.1]
  def change
    create_table :user_sabers do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :saber, null: false, foreign_key: true

      t.timestamps
    end
  end
end
