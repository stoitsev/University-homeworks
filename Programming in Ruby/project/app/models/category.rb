class Category < ActiveRecord::Base
  has_many :children, :class_name => "Category", :foreign_key => "parent_id"
  belongs_to :parent, :class_name => "Category"
  has_and_belongs_to_many :books
  
  validates :name, :parent_id, :presence => true
  validates :name, :length => { :minimum => 2, :maximum => 100 }
  validates :description, :length => { :maximum => 500 }
  validates :parent_id, :numericality => { :only_integer => true } 
  #validates :parent_id, :inclusion => { :in => Category.all.map { |c| c.id }, :message => "%{value} is not a valid category"}
end
