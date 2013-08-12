class Book < ActiveRecord::Base
  has_and_belongs_to_many :categories
  
  validates :title, :author, :description, :num_available, :presence => true
  validates :title, :length => { :minimum => 2, :maximum => 100 }
  validates :author, :length => { :minimum => 2, :maximum => 100 }
  validates :description, :length => { :maximum => 700 }
  validates :num_available, :numericality => { :only_integer => true, :greater_than_or_equal_to => 0 }
  
  attr_accessor :categories_list
  after_save :update_categories
  
  private 

  def update_categories
    categories.delete_all
    selected_categories = categories_list.nil? ? [] : categories_list.keys.collect{|id| Category.find_by_id(id)}
    selected_categories.each {|category| self.categories << category}
  end
  
end
