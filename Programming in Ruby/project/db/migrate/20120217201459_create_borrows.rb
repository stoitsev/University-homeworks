class CreateBorrows < ActiveRecord::Migration
  def change
    create_table :borrows do |t|
      t.references :book
      t.references :user
      t.date :date_taken
      t.date :return_date
      t.boolean :returned
      
      t.timestamps
    end
  end
end
