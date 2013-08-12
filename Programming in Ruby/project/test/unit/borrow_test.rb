require 'test_helper'

class BorrowTest < ActiveSupport::TestCase
  test "borrow attributes must not be empty" do
    borrow = Borrow.new
    assert borrow.invalid?
    assert borrow.errors[:book_id].any?
    assert borrow.errors[:user_id].any?
    assert borrow.errors[:date_taken].any?
  end
  
  test "must create new borrow" do
    borrow = new_borrow
    
    assert borrow.valid?
  end
  
  test "borrow book must be valid" do
    borrow = new_borrow
    
    borrow.book_id = "a"
    assert borrow.invalid?
    assert_equal "is not a number", borrow.errors[:book_id].join('; ')

    borrow.book_id = 1.2
    assert borrow.invalid?
    assert_equal "must be an integer", borrow.errors[:book_id].join('; ')
  
  end
  
  test "borrower must be valid" do
    borrow = new_borrow
    
    borrow.user_id = "a"
    assert borrow.invalid?
    assert_equal "is not a number", borrow.errors[:user_id].join('; ')

    borrow.user_id = 1.2
    assert borrow.invalid?
    assert_equal "must be an integer", borrow.errors[:user_id].join('; ')
  
  end
  
  test "should return books" do
    borrow = new_borrow
    
    borrow.save
    borrow.returned = true
    
    assert_difference('books(:one).num_available', 0) do
      borrow.save
    end
  
  end
  
  private
  
  def new_borrow
    Borrow.new :book_id => books(:one).id, 
               :user_id => users(:admin).id, 
               :date_taken => Time.now
  end
end
