class CreateSaberSegments < ActiveRecord::Migration[6.1]
  def change
    create_table :saber_segments do |t|
      t.belongs_to :saber, null: false, foreign_key: true
      t.belongs_to :segment, null: false, foreign_key: true

      t.timestamps
    end
  end
end
