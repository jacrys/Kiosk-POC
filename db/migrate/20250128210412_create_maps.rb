class CreateMaps < ActiveRecord::Migration[8.0]
  def change
    create_table :maps do |t|
      t.string :name
      t.string :year

      t.timestamps
    end
  end
end
