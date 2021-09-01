class CreateSegments < ActiveRecord::Migration[6.1]
  def change
    create_table :segments do |t|
      t.string :name
      t.string :segment_type
      t.string :image_Url

      t.timestamps
    end
  end
end
