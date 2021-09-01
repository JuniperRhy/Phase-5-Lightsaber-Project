class CreateSabers < ActiveRecord::Migration[6.1]
  def change
    create_table :sabers do |t|
      t.string :name
      t.string :hilt_color
      t.string :blade_color

      t.timestamps
    end
  end
end
