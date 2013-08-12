require 'test_helper'

class BookTest < ActiveSupport::TestCase
  test "book attributes must not be empty" do
    product = Book.new
    assert product.invalid?
    assert product.errors[:title].any?
    assert product.errors[:description].any?
    assert product.errors[:author].any?
    assert product.errors[:num_available].any?
  end
  
  test "valid book must be saved" do
    book = new_book                 
    
    assert book.valid?
  end
  
  test "title must be with proper length" do
    book = new_book
    book.title = "T"
                     
    assert !book.valid?
    assert_equal "is too short (minimum is 2 characters)", book.errors[:title].join('; ') 
    
    book.title *= 200
    assert !book.valid?
    assert_equal "is too long (maximum is 100 characters)", book.errors[:title].join('; ')
  end
  
  test "author must be with proper length" do
    book = new_book
    book.author = "T"
                     
    assert !book.valid?
    assert_equal "is too short (minimum is 2 characters)", book.errors[:author].join('; ') 
    
    book.author *= 200
    assert !book.valid?
    assert_equal "is too long (maximum is 100 characters)", book.errors[:author].join('; ')
  end
  
  test "description must be with proper length" do
    book = new_book
    book.description *= 100
                     
    assert !book.valid?
    assert_equal "is too long (maximum is 700 characters)", book.errors[:description].join('; ') 
  end
  
  test "num_available must be integer" do
    book = new_book
    
    book.num_available = -1
    assert !book.valid?
    assert_equal "must be greater than or equal to 0", book.errors[:num_available].join('; ')
    
    book.num_available = 1.1
    assert !book.valid?
    assert_equal "must be an integer", book.errors[:num_available].join('; ')
  
  end
  
  private 
  
  def new_book
    Book.new :title => "Test", 
             :author => "Test Test", 
             :categories_list => {1 => 'Test'},
             :description => "Test test test test test test", 
             :num_available => 1
  end
end
