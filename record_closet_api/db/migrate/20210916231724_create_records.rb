class CreateRecords < ActiveRecord::Migration[6.1]
  def change
    create_table :records do |t|
      t.string :title
      t.string :artist
      t.string :condition
      t.integer :year
      t.integer :rating

      t.timestamps
    end
  end
end
