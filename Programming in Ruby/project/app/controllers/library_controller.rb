class LibraryController < ApplicationController
  before_filter :authorize_admin, :except => [:index]
  
  def index
    @books = Book.order("created_at DESC").limit(10)
  end

  def admin
  end

end
