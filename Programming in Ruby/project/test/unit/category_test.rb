require 'test_helper'

class CategoryTest < ActiveSupport::TestCase
  test "category attributes must not be empty" do
    category = Category.new
    assert category.invalid?
    assert category.errors[:name].any?
  end
  
  test "valid category must be saved" do
    category = category_new
    
    
    assert category.valid?
  end  
  
  test "name must be with proper length" do
    category = category_new
    category.name = "a"
    
    assert category.invalid?
    assert_equal "is too short (minimum is 2 characters)", category.errors[:name].join('; ') 
    
    category.name *= 101
    
    assert category.invalid?
    assert_equal "is too long (maximum is 100 characters)", category.errors[:name].join('; ')
  
  end
  
  test "parent category must be valid" do
    category = category_new
    category.parent_id = "a"
    
    assert category.invalid?
    assert_equal "is not a number", category.errors[:parent_id].join('; ')
     
  end
  
  
  private 
  
  def category_new
    Category.new :name => "Test", 
                 :description => "Test test test test test test", 
                 :parent_id => 1
  end
end
