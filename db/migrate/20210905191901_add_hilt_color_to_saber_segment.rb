class AddHiltColorToSaberSegment < ActiveRecord::Migration[6.1]
  def change
    add_column :saber_segments, :hilt_color, :string
  end
end
