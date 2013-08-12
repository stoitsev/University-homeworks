class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.integer :num_available
      t.text :description
      t.string :language

      t.timestamps
    end
    
    create_table :books_categories, :id => false do |t|
      t.integer :book_id
      t.integer :category_id
    end
    
    add_index "books_categories", "book_id"
    add_index "books_categories", "category_id"
  end
end
