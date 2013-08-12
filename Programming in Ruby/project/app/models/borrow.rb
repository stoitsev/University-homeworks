class Borrow < ActiveRecord::Base
  belongs_to :user
  belongs_to :book
  
  before_create :calculate_date, :borrow_book
  after_update :return_book
  
  validates :book_id, :user_id, :date_taken, :presence => true
  validates :book_id, :numericality => { :only_integer => true } 
  validates :user_id, :numericality => { :only_integer => true } 
  
  private
  
  def calculate_date
    self.return_date = self.date_taken + 3.months
  end
  
  def borrow_book
    begin
      Book.transaction do
        book = Book.find_by_id(self.book_id)
        book.num_available -= 1
        book.save
      end
    rescue ActiveRecord::RecordInvalid => invalid
      self.errors[:book_id] = "There are no free copies of that book"
    end 
    self.returned = 0
  end
  
  def return_book
    if self.returned_changed? && self.returned
      book = Book.find_by_id(self.book_id)
      book.num_available += 1
      book.save
    elsif self.returned_changed?
      borrow_book
    end
  end
end
