class CreateChampions < ActiveRecord::Migration[6.1]
  def change
    create_table :champions do |t|
      t.string :name
      t.string :origin
      t.string :category
      t.integer :user_id

      t.timestamps
    end
  end
end
